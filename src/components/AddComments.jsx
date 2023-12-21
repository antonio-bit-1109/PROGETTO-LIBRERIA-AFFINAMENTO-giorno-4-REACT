import { Component } from "react";
import Form from "react-bootstrap/Form";

class AddComments extends Component {
    state = {};

    /* componentDidMount() {
        const options = {
            method: "POST",

            body: JSON.stringify(this.state.postDatas)
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDMxNzE4OTYsImV4cCI6MTcwNDM4MTQ5Nn0.zBILXX-OLo51DVDc-vX9T93TuYd9YREBLJ0U4sOMIy8",
            },
        };
        fetch("https://striveschool-api.herokuapp.com/api/comments/" , options)
    } */

    render() {
        const { book } = this.props;

        console.log(book);

        return (
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Commento</Form.Label>
                    <Form.Control type="text" placeholder="inserisci il tuo commento..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Voto</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Id libro: {book.asin}</Form.Label>
                    <Form.Control type="text" rows={3} />
                </Form.Group>
            </Form>
        );
    }
}

export default AddComments;
