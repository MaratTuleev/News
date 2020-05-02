import React, {Component} from "react";


export default class CommentsList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isCommentOpen: false
        }
    }

    render() {
        return (
            <div>{this.getBody()}</div>
        )
    }

    getBody() {
        const {isCommentOpen} = this.state;
        return (
            <div>
                <button onClick={this.toggleCommentOpen}>
                    {isCommentOpen ? 'close comments': 'open comments'}
                </button>
                {this.getComment()}
            </div>
        )
    }

    getComment() {
        if (!this.state.isCommentOpen) return null;
        else {
            const {comments} = this.props;

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
    toggleCommentOpen = () => {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        })
    }

}