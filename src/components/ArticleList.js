import React, {Component} from "react";
import Article from "./Article";
import Accordeon from "../decorators/Accordeon";
import {connect} from "react-redux";


class ArticleList extends Component {

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props

        const articleElements = articles.map(
            (article) => <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )

    }

}

const selectFilter = (articles, selected) => {
    return selected.length === 0 ? articles : articles.filter(article => selected.some(select => select.value === article.id))
}
const dateFilter = (articles, from, to) => {
    return !from || !to ? articles : articles.filter((article) => {
        const currentArticleDate = new Date(article.date);
        const a = from < currentArticleDate;
        const b = currentArticleDate < to;
        return a && b;
    })
}
const mapStateToProps = ({articles, datePicker: {from, to}, selections}) => ({
    articles: selectFilter(dateFilter(articles, from, to), selections)
})

export default connect(mapStateToProps)(Accordeon(ArticleList))
