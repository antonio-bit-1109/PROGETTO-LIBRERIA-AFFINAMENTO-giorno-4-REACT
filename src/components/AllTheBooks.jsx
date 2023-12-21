import React, { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import historyBooks from "../data/history.json";
import sciFiBooks from "../data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";
import { Badge } from "react-bootstrap";

class AllTheBooks extends Component {
    state = {
        books: fantasyBooks,
        counter: 0,
        badgeColor: "danger",
    };

    render() {
        /* riassegno la proprietà di this.state.books alla variabile booksCollection e la passo al metodo map  */
        const booksCollection = this.state.books;

        return (
            <Container>
                <Row>
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <ButtonComponent
                            margin="mx-1"
                            theme="danger"
                            Btncontent="Fantasy"
                            onClick={() => {
                                this.setState((prevState) => ({
                                    books: fantasyBooks,
                                    counter: prevState.counter + 1,
                                    badgeColor: "danger",
                                }));
                            }}
                        />
                        <ButtonComponent
                            theme="info"
                            Btncontent="Horror"
                            onClick={() => {
                                this.setState((prevState) => ({
                                    books: horrorBooks,
                                    counter: prevState.counter + 1,
                                    badgeColor: "info",
                                }));
                            }}
                        />
                        <ButtonComponent
                            theme="success"
                            Btncontent="History"
                            onClick={() => {
                                this.setState((prevState) => ({
                                    books: historyBooks,
                                    counter: prevState.counter + 1,
                                    badgeColor: "success",
                                }));
                            }}
                        />
                        <ButtonComponent
                            theme="primary"
                            Btncontent="Romance"
                            onClick={() => {
                                this.setState((prevState) => ({
                                    books: romanceBooks,
                                    counter: prevState.counter + 1,
                                    badgeColor: "primary",
                                }));
                            }}
                        />
                        <ButtonComponent
                            margin="me-4"
                            theme="warning"
                            Btncontent="Sci-fi"
                            onClick={() => {
                                this.setState((prevState) => ({
                                    books: sciFiBooks,
                                    counter: prevState.counter + 1,
                                    badgeColor: "warning",
                                }));
                            }}
                        />

                        <h4 className="fs-3 m-0 d-flex align-item-center">count: {this.state.counter}</h4>
                    </div>

                    {booksCollection.map((book) => (
                        <Col key={`book-${book.asin}`} xs={12} md={6} lg={4} className="my-2 p-3">
                            <Card className="h-100 text-center">
                                <div className="h-100">
                                    {" "}
                                    <Card.Img variant="top" src={book.img} className="img-format" />
                                </div>

                                <Card.Body className="h-auto d-flex flex-column justify-content-center">
                                    <Card.Title>{book.title}</Card.Title>{" "}
                                    <div>
                                        <Badge bg={this.state.badgeColor} className="p-2">
                                            {" "}
                                            {book.category}{" "}
                                        </Badge>
                                    </div>
                                    <Card.Text className="fs-3 text-primary">{book.price}$</Card.Text>
                                    <ButtonComponent theme="success" Btncontent="Add To Cart" />
                                    <ButtonComponent theme="danger" Btncontent="Eliminate" />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default AllTheBooks;
