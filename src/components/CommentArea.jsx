import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
    render() {
        const { comments } = this.props;
        console.log("contenuto di comments", comments);

        const { show } = this.props;

        return (
            /* commentList  */

            <CommentList show={show} comments={comments} />

            /* AddComments */
        );
    }
}

export default CommentArea;
