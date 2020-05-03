import React, {Component} from "react";
import Article from "./Article";
import Accordeon from "../decorators/Accordeon";


class ArticleList extends Component {

    render() {
        const {articles, openItemId, toggleOpenItem, from, to} = this.props
        const articleFiltered = !from || !to ? articles : articles.filter((article) => {
            const currentArticleDate = new Date(article.date);
            const a = from < currentArticleDate;
            const b = currentArticleDate < to;
            return a && b;
        })
        const articleElements = articleFiltered.map(
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

export default Accordeon(ArticleList);

