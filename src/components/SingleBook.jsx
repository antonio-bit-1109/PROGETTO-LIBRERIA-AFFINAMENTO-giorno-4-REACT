import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";
import { Badge } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
    state = {
        selected: false,
    };

    render() {
        return (
            <Card
                className="h-100 text-center"
                style={{
                    border: this.state.selected === true ? "3px solid blue" : "1px solid black",
                    padding: this.state.selected === true ? "0.5rem" : "none",
                }}
                onClick={() => this.setState({ selected: !this.state.selected })}
            >
                <div className="h-100">
                    {" "}
                    <Card.Img variant="top" src={this.props.book.img} className="img-format" />
                </div>

                <Card.Body className="h-auto d-flex flex-column justify-content-center">
                    <Card.Title>{this.props.book.title}</Card.Title>{" "}
                    <div>
                        <Badge bg={"danger"} className="p-2">
                            {" "}
                            {this.props.book.category}{" "}
                        </Badge>
                    </div>
                    <Card.Text className="fs-3 text-primary">{this.props.book.price}$</Card.Text>
                    <ButtonComponent theme="success" Btncontent="Add To Cart" />
                    <ButtonComponent theme="danger" Btncontent="Eliminate" />
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
