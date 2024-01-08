import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddComments = ({ book }) => {
    const [sendComment, setSendComment] = useState({
        comment: "",
        rate: "",
        elementId: "",
    });

    useEffect(() => {
        setSendComment((prevSendComment) => ({ ...prevSendComment, elementId: book.asin }));
    }, [book.asin]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDQ3MjIzMTIsImV4cCI6MTcwNTkzMTkxMn0.o6QM1stCifQGBTxb7WO5estJemL28Q_NjVcVHCLduO0",
            },
            body: JSON.stringify(sendComment),
        };

        fetch("https://striveschool-api.herokuapp.com/api/comments/", options)
            .then((response) => {
                console.log("ESITO ESITO ESITO ", response.status);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formComment">
                <Form.Label>Commento</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="inserisci il tuo commento..."
                    value={sendComment.comment}
                    onChange={(event) => setSendComment({ ...sendComment, comment: event.target.value })}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formVote">
                <Form.Label>Voto</Form.Label>
                <Form.Control
                    value={sendComment.rate}
                    onChange={(event) => setSendComment({ ...sendComment, rate: event.target.value })}
                    type="text"
                    min={0}
                    max={5}
                    rows={1}
                />
            </Form.Group>
            <Form.Group className="mb-3 invisible" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Id libro: {book.asin}</Form.Label>
                <Form.Control value={book.asin} type="text" rows={3} readOnly />
            </Form.Group>
            <Button className="my-3" variant="success" type="submit">
                Invia il Commento ora
            </Button>
        </Form>
    );
};

export default AddComments;
