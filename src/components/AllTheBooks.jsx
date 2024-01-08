import React, { useState } from "react";
import fantasyBooks from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";
import { Badge } from "react-bootstrap";

const AllTheBooks = () => {
    const [books, setBooks] = useState(fantasyBooks);
    const [counter, setCounter] = useState(0);
    const [badgeColor] = useState("danger");

    return (
        <Container>
            <Row>
                {books.map((book) => (
                    <Col key={`book-${book.asin}`} xs={12} md={6} lg={4} className="my-2 p-3">
                        <Card className="h-100 text-center">
                            <div className="h-100">
                                <Card.Img variant="top" src={book.img} className="img-format" />
                            </div>

                            <Card.Body className="h-auto d-flex flex-column justify-content-center">
                                <Card.Title>{book.title}</Card.Title>
                                <div>
                                    <Badge bg={badgeColor} className="p-2">
                                        {book.category}
                                    </Badge>
                                </div>
                                <Card.Text className="fs-3 text-primary">{book.price}$</Card.Text>
                                <ButtonComponent theme="success" Btncontent="Add To Cart" />
                                <ButtonComponent theme="danger" Btncontent="Eliminate" />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col></Col>
            </Row>
        </Container>
    );
};

export default AllTheBooks;
