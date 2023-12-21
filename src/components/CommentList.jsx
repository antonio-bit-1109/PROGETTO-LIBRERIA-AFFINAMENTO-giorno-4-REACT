import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

class CommentList extends Component {
    state = { id: "" };

    async handleDeleteComment() {
        try {
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDMxNzE4OTYsImV4cCI6MTcwNDM4MTQ5Nn0.zBILXX-OLo51DVDc-vX9T93TuYd9YREBLJ0U4sOMIy8",
                },
            };

            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${this.state.id}`,
                options
            );

            console.log(response.status);
        } catch (error) {
            console.error(error);
        }
    }

    async handleGetToApi(id) {
        try {
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxY2JhMDBkOGEyMDAwMThhNDhhNDAiLCJpYXQiOjE3MDMxNzE4OTYsImV4cCI6MTcwNDM4MTQ5Nn0.zBILXX-OLo51DVDc-vX9T93TuYd9YREBLJ0U4sOMIy8",
                },
            };

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, options);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { show } = this.props;
        const { comments } = this.props;
        const { book } = this.props;

        return (
            <div>
                <ListGroup className={show ? "d-block" : "d-none"}>
                    {comments.map((singleArrComm, index) => (
                        <div className="mb-4 border border-success" key={`arrId${index}`}>
                            <Button
                                onClick={async () => {
                                    await this.setState({ id: singleArrComm._id });
                                    await this.handleDeleteComment();
                                    await this.handleGetToApi(book.asin);
                                }}
                            >
                                Cancellami
                            </Button>
                            <ListGroup.Item>{singleArrComm.comment}</ListGroup.Item>
                            <ListGroup.Item>{singleArrComm.rate}⭐</ListGroup.Item>
                            <ListGroup.Item>{singleArrComm.author}</ListGroup.Item>
                            <ListGroup.Item>{singleArrComm.createdAt}</ListGroup.Item>
                        </div>
                    ))}
                </ListGroup>{" "}
            </div>
        );
    }
}

export default CommentList;
