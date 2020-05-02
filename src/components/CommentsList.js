import React, {Component} from "react";
import toggleOpen from "../decorators/toggleOpen";

class CommentsList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        return (
            <div>{this.getBody()}</div>
        )
    }

    getBody() {
        const {isOpen, toggleOpen} = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close comments' : 'open comments'}
                </button>
                {this.getComment()}
            </div>
        )
    }

    getComment() {
        const {isOpen} = this.props;
        if (!isOpen) return null;
        else {
            const {comments} = this.props;
            if (!comments.length) return <section>No comments</section>
            const comment = comments.map((comment) =>
                (
                    <div key={comment.id}>
                        <h4>{comment.user}</h4>
                        <div>{comment.text}</div>
                    </div>
                )
            );
            return comment
        }
    }


}
export default toggleOpen(CommentsList);