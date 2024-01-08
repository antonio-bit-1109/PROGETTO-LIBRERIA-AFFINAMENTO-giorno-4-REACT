import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import Alert from "react-bootstrap/Alert";

const BookList = (props) => {
    const { ListOfBooks } = props;

    const variant = "warning";

    const [Myresearch, setMyresearch] = useState("");
    const [selectedCategory] = useState("horror");
    const [showComments, setShowComments] = useState(false);
    const [myComments, setMyComments] = useState([]);
    const [singleMappedBook, setSingleMappedBook] = useState([]);
    console.log("SINGOLO MAPPATO", singleMappedBook);

    const [selected, setSelected] = useState(false);
    console.log(selected);

    const handlesetsingleMappedBook = (value) => {
        setSingleMappedBook(value);
    };

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
            <div className="d-flex">
                <Row>
                    <Col xxl={12}>
                        {ListOfBooks[selectedCategory]
                            .filter((filteredBook) => filteredBook.title.toLowerCase().includes(Myresearch))
                            .slice(0, 3)
                            .map((book, index) => (
                                <Col key={`num-${index}`} xs={12} md={6} lg={12} className="my-2 p-3">
                                    <SingleBook
                                        book={book}
                                        setMyComments={setMyComments}
                                        setShowComments={setShowComments}
                                        showComments={showComments}
                                        myComments={myComments}
                                        handlesetsingleMappedBook={handlesetsingleMappedBook}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                </Col>
                            ))}
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col xxl={12}>
                        {!selected ? (
                            <Alert key={variant} variant={variant}>
                                Non c'è nulla da vedere!
                            </Alert>
                        ) : null}
                        <CommentArea comments={myComments} show={showComments} book={singleMappedBook} />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default BookList;
