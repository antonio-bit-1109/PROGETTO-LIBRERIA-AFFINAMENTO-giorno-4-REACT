import { Component } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class AddComments extends Component {
    state = {
        sendComment: {
            comment: "",
            rate: "",
            elementId: "",
        },
    };

    handleSubmit = (event) => {
        event.preventDefault();
        /* fai la fetch??  */
        const state = this.state;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDMxNzE4OTYsImV4cCI6MTcwNDM4MTQ5Nn0.zBILXX-OLo51DVDc-vX9T93TuYd9YREBLJ0U4sOMIy8",
            },
            body: JSON.stringify(state),
        };

        fetch("https://striveschool-api.herokuapp.com/api/comments/", options).then((response) => {
            console.log("PROBLEMA IN VISTA", response.status);
        });
    };

    insertAsin = (event) => {
        const { book } = this.props;
        this.setState({ sendComment: { ...this.state.sendComment, elementId: book.asin } });
    };

    render() {
        const { book } = this.props;

        console.log(book);

        return (
            <Form onClick={this.insertAsin} onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formComment">
                    <Form.Label>Commento</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="inserisci il tuo commento..."
                        value={this.state.sendComment.comment}
                        onChange={(event) => {
                            this.setState({ sendComment: { ...this.state.sendComment, comment: event.target.value } });
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formVote">
                    <Form.Label>Voto</Form.Label>
                    <Form.Control
                        value={this.state.sendComment.rate}
                        onChange={(event) =>
                            this.setState({ sendComment: { ...this.state.sendComment, rate: event.target.value } })
                        }
                        type="text"
                        min={0}
                        max={5}
                        rows={1}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Id libro: {book.asin}</Form.Label>
                    <Form.Control value={book.asin} type="text" rows={3} readOnly />
                </Form.Group>
                <Button className="my-3" variant="success" type="submit">
                    Invia il Commento ora{" "}
                </Button>{" "}
            </Form>
        );
    }
}

export default AddComments;
