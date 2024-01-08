import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
    const { book } = props;

    const [selected, setSelected] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [myComments, setMyComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDQ3MjIzMTIsImV4cCI6MTcwNTkzMTkxMn0.o6QM1stCifQGBTxb7WO5estJemL28Q_NjVcVHCLduO0",
                    },
                };

                const response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`,
                    options
                );

                if (!response.ok) {
                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME, PER TE SOLO LE LAME!");
                        } else {
                            throw new Error("HAI FATTO LA CAPPELLATA, CONTROLLA again");
                        }
                    }
                    if (response.status > 500 && response.status < 600) {
                        throw new Error("qualquadra non cosa lato server???");
                    }
                } else {
                    const MyData = await response.json();
                    setMyComments(MyData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [book.asin]);

    return (
        <Card
            className="h-100 text-center palegreen"
            style={{
                border: selected ? "2px solid red" : "1px solid black",
                padding: selected ? "0.5rem" : "none",
            }}
            onClick={() => {
                setSelected(!selected);
                setShowComments(!showComments);
            }}
        >
            <div className="h-100">
                {" "}
                <Card.Img
                    variant="top"
                    src={book.img}
                    className="img-format"
                    style={{ height: "300px", objectFit: "contain" }}
                />
            </div>

            <Card.Body className="h-auto d-flex flex-column justify-content-center">
                <Card.Title>{book.title}</Card.Title>{" "}
                <div>
                    <Badge bg={"danger"} className="p-2">
                        {" "}
                        {book.category}{" "}
                    </Badge>
                </div>
                <Card.Text className="fs-3 text-primary">{book.price}$</Card.Text>
            </Card.Body>

            {/* comment Area  */}
            <CommentArea comments={myComments} show={showComments} book={book} />
        </Card>
    );
};

export default SingleBook;
