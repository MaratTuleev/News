import React, {Component} from "react";
import CommentsList from "./CommentsList";
import {CSSTransition} from 'react-transition-group';
import '../css/styles.css'

export default class Article extends Component {

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
                <section>{article.date}</section>
                <CommentsList comments={article.comments}/>
            </div>
        )
    }

}
