import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";
import { Badge } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
    state = {
        selected: false,
        showComments: false,
        myComments: {},
    };

    /* fuori render faccio la fetch  */

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDMxNjM3ODAsImV4cCI6MTcwNDM3MzM4MH0.IXMDLK77lApMvZrdst6UGqxRJZxAQZ8pYcvY87alkv8",
            },
        };

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, options)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME, PER TE SOLO LE LAME!");
                        } else {
                            throw new Error("HAI FATTO LA CAPPELLATA , CONTROLLA again");
                        }
                    }
                    if (response.status > 500 && response.status < 600) {
                        throw new Error("qualquadra non cosa lato server???");
                    }
                } else {
                    return response.json();
                }
            })
            .then((MyData) => {
                console.log(MyData);
                /* mi porto il dato nello stato */
                /* this.setState({
                    myComments: data,
                }); */
            })

            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Card
                className="h-100 text-center"
                style={{
                    border: this.state.selected === true ? "3px solid blue" : "1px solid black",
                    padding: this.state.selected === true ? "0.5rem" : "none",
                }}
                onClick={() =>
                    this.setState({ selected: !this.state.selected, showComments: !this.state.showComments })
                }
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

                {/* comment Area  */}
                <Card className={this.state.showComments ? "d-block" : "d-none"}>
                    <Card.Header>Commenti:</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{" "}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Card>
        );
    }
}

export default SingleBook;
