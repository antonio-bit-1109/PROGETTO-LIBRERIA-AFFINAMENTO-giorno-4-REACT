import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

import { Component } from "react";

class BookList extends Component {
    state = {
        Myresearch: "",
        selectedCategory: "fantasy",
    };

    render() {
        const { ListOfBooks } = this.props;

        return (
            <Row>
                {" "}
                <Container>
                    <Col lg={6} className="m-auto">
                        <input
                            className="w-100"
                            type="text"
                            value={this.state.Myresearch}
                            onChange={(event) => this.setState({ Myresearch: event.target.value })}
                            placeholder="inserisci il titolo del libro..."
                        />
                    </Col>
                </Container>
                {ListOfBooks.scifi
                    .filter((filteredBook) => filteredBook.title.toLowerCase().includes(this.state.Myresearch))
                    .map((book, index) => (
                        <Col key={`num-${index}`} xs={12} md={6} lg={4} className="my-2 p-3">
                            {" "}
                            <SingleBook book={book} />{" "}
                        </Col>
                    ))}
            </Row>
        );
    }
}

export default BookList;
