import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SingleBookComponent = (props) => {
    return (
        <Col xs={12} md={6} lg={4} className="my-2 p-3">
            <Card>
                <Card.Img variant="top" src={props.book.img} />
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleBookComponent;
