import React, {Component} from "react";
import CommentsList from "./CommentsList";
import toggleOpen from "../decorators/toggleOpen";

class Article extends Component {

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }


    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
                <section>{article.text}</section>
                <CommentsList comments={article.comments}/>
            </div>
        )
    }

}
export default toggleOpen(Article)