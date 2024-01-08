import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = (props) => {
    const { ListOfBooks } = props;

    const [Myresearch, setMyresearch] = useState("");
    const [selectedCategory] = useState("fantasy");

    return (
        <>
            <Container>
                <Col lg={6} className="m-auto">
                    <input
                        className="w-100"
                        type="text"
                        value={Myresearch}
                        onChange={(event) => setMyresearch(event.target.value)}
                        placeholder="inserisci il titolo del libro..."
                    />
                </Col>
            </Container>
            <Row>
                <Col xxl={12}>
                    {ListOfBooks[selectedCategory]
                        .filter((filteredBook) => filteredBook.title.toLowerCase().includes(Myresearch))
                        .slice(0, 6)
                        .map((book, index) => (
                            <Col key={`num-${index}`} xs={12} md={6} lg={4} className="my-2 p-3">
                                <SingleBook book={book} />
                            </Col>
                        ))}
                </Col>
                <Col xxl={12}></Col>
            </Row>
        </>
    );
};

export default BookList;
