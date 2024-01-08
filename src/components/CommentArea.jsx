import CommentList from "./CommentList";
import AddComments from "./AddComments";

const CommentArea = (props) => {
    const { comments, show, book } = props;
    console.log("contenuto di comments", comments);

    return (
        /* commentList  */

        <>
            {" "}
            <CommentList show={show} comments={comments} book={book} />
            <AddComments book={book} />
        </>
    );
};

export default CommentArea;
