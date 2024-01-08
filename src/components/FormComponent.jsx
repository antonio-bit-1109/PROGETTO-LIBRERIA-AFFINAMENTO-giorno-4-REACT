import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormComponent = () => {
    const [info, setInfo] = useState({
        email: "",
        name: "",
        surname: "",
        adult: false,
        comment: "",
    });

    const handleChange = (propName, propValue) => {
        setInfo((prevInfo) => ({ ...prevInfo, [propName]: propValue }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const options = {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch("https://striveschool-api.herokuapp.com/api/reservation", options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then((onResponseData) => {
                setInfo({
                    email: "",
                    name: "",
                    surname: "",
                    adult: false,
                    comment: "",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Form onSubmit={handleSubmit} className="mt-5">
                        <h3 className="text-center">(●'◡'●) Aspetta un attimo...(●'◡'●)</h3>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="inserisci la tua email..."
                                value={info.email}
                                onChange={(event) => handleChange("email", event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Inserisci Nome qui..."
                                value={info.name}
                                onChange={(event) => handleChange("name", event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSurname">
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Inserisci cognome qui..."
                                value={info.surname}
                                onChange={(event) => handleChange("surname", event.target.value)}
                            />
                        </Form.Group>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Maggiorenne?"
                            checked={info.adult}
                            onChange={(event) => handleChange("adult", event.target.checked)}
                        />
                        <Form.Group className="mb-5" controlId="formComment">
                            <Form.Label>Perchè hai scelto la nostra libreria? </Form.Label>
                            <Form.Control
                                placeholder="Hai qualche suggerimento?"
                                as="textarea"
                                rows={4}
                                value={info.comment}
                                onChange={(event) => handleChange("comment", event.target.value)}
                            />
                            <Button className="mt-3" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FormComponent;
