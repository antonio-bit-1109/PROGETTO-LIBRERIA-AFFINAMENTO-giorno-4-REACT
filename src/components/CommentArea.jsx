import { Component } from "react";
import CommentList from "./CommentList";
import AddComments from "./AddComments";

class CommentArea extends Component {
    render() {
        const { comments } = this.props;
        console.log("contenuto di comments", comments);

        const { show } = this.props;
        const { book } = this.props;

        return (
            /* commentList  */

            <>
                {" "}
                <CommentList show={show} comments={comments} book={book} />
                <AddComments book={book} />
            </>
        );
    }
}

export default CommentArea;
