import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
    const { show } = props;
    const { comments } = props;

    console.log("contenuto di comments ", comments);

    return (
        <ListGroup className={show ? "d-block" : "d-none"}>
            {comments.map((singleArrComm, index) => (
                <div className="mb-4 border border-success" key={`arrId${index}`}>
                    <ListGroup.Item>{singleArrComm.comment}</ListGroup.Item>
                    <ListGroup.Item>{singleArrComm.rate}⭐</ListGroup.Item>
                    <ListGroup.Item>{singleArrComm.author}</ListGroup.Item>
                    <ListGroup.Item>{singleArrComm.createdAt}</ListGroup.Item>
                </div>
            ))}
        </ListGroup>
    );
};

export default CommentList;
