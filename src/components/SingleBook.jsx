import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";
import { Badge } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
    state = {
        selected: false,
        showComments: false,
        myComments: [] /* ci infilo i dati dalla fetch  */,
    };

    /* fuori render faccio la fetch  */

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDMxNzE4OTYsImV4cCI6MTcwNDM4MTQ5Nn0.zBILXX-OLo51DVDc-vX9T93TuYd9YREBLJ0U4sOMIy8",
            },
        };

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, options)
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
                } else if (response.ok) {
                    return response.json();
                }
            })
            .then((MyData) => {
                console.log(MyData);
                /* mi porto il dato nello stato */
                this.setState({
                    myComments: MyData,
                });
            })

            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { book } = this.props;

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
                <CommentArea comments={this.state.myComments} show={this.state.showComments} book={book} />
            </Card>
        );
    }
}

export default SingleBook;
