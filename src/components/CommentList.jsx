import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CommentList = ({ show, comments, book }) => {
    const [id, setId] = useState("");

    const handleDeleteComment = async (id) => {
        try {
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer YOUR_ACCESS_TOKEN",
                },
            };

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, options);

            console.log(response.status);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetToApi = async (id) => {
        try {
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer YOUR_ACCESS_TOKEN",
                },
            };

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, options);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (id) {
            handleDeleteComment();
            handleGetToApi(book.asin);
        }
    }, [id, book.asin]);

    return (
        <div>
            <ListGroup className={show ? "d-block" : "d-none"}>
                {comments.map((singleArrComm, index) => (
                    <div className="mb-4 border border-success" key={`arrId${index}`}>
                        <Button onClick={() => setId(singleArrComm._id)}>Cancellami</Button>
                        <ListGroup.Item>{singleArrComm.comment}</ListGroup.Item>
                        <ListGroup.Item>{singleArrComm.rate}⭐</ListGroup.Item>
                        <ListGroup.Item>{singleArrComm.author}</ListGroup.Item>
                        <ListGroup.Item>{singleArrComm.createdAt}</ListGroup.Item>
                    </div>
                ))}
            </ListGroup>
        </div>
    );
};

export default CommentList;
