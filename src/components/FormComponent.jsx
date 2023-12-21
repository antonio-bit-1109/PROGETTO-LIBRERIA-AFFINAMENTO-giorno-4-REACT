import { Button } from "react-bootstrap";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class FormComponent extends Component {
    /* devo legare "a doppio filo" il campo form con i valori nello state */
    // 1. lego il value dell'elemento input all'interno dello state , dentro info es: per il campo email --> value={this.state.info.email}
    // 2. chiamo il metodo onChange su ogni input per legare il valore scritto nell'input allo stato della classe
    // 3. sto chiamando 5 volte sempre lo stesso metodo (Onchange) su ogni elemento del form, dove l'unica cosa che cambia è la proprietà da sovrascrivere(email: , name: , surname: ecc), quindi posso scrivere una funzione che gestisca tutti gli onchange a cui passo solo il valore differente - QUESTA FUNZIONE SI SCRIVE PRIMA DI RENDER - OBBLIGATORIO FARLO CON ARROW FUNCTION PERCHè QUESTE EREDITANO IL THIS DAL LORO CONTESTO ESTERNO (QUINDI IL THIS DELLA CLASSE DI RIFERIMENTO)

    state = {
        user: 1,
        info: {
            email: "",
            name: "",
            surname: "",
            adult: false,
            comment: "",
        },
    };

    handleChange = (propName, propValue) => {
        this.setState({ info: { ...this.state.info, [propName]: propValue } });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const options = {
            method: "POST",
            body: JSON.stringify(this.state.reservation),
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
                this.setState({
                    info: {
                        email: "",
                        name: "",
                        surname: "",
                        adult: false,
                        comment: "",
                    },
                });
            })

            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <Container fluid="md">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <Form onSubmit={this.handleSubmit} className="mt-5">
                            <h3 className="text-center">(●'◡'●) Aspetta un attimo...(●'◡'●)</h3>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="inserisci la tua email..."
                                    value={this.state.info.email}
                                    // METODO SINTETICO COMUNE A TUTTI I CAMPI FORM

                                    /* onChange={(event) => {
                                        this.handleChange("email", event.target.value);
                                    }} */

                                    // METODO LUNGO DOVE SCRIVO OGNI VOLTA L'EVENTO ONCHANGE
                                    onChange={(event) => {
                                        this.setState({ info: { ...this.state.info, email: event.target.value } });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Inserisci Nome qui..."
                                    value={this.state.info.nome}
                                    onChange={(event) => {
                                        this.handleChange("name", event.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSurname">
                                <Form.Label>Cognome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Inserisci cognome qui..."
                                    value={this.state.info.surname}
                                    onChange={(event) => {
                                        this.handleChange("surname", event.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Maggiorenne?"
                                checked={this.state.info.adult}
                                onChange={(event) => {
                                    this.handleChange("adult", event.target.checked);
                                }}
                            />
                            <Form.Group className="mb-5" controlId="formComment">
                                <Form.Label>Perchè hai scelto la nostra libreria? </Form.Label>
                                <Form.Control
                                    placeholder="Hai qualche suggerimento?"
                                    as="textarea"
                                    rows={4}
                                    value={this.state.info.comment}
                                    onChange={(event) => {
                                        this.handleChange("comment", event.target.value);
                                    }}
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
    }
}

export default FormComponent;
