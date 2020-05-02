import React, {Component} from "react";
import Article from "./Article";


export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map(
            (article) => <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    toggleOpen={this.toggleOpenArticle.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )

    }

    toggleOpenArticle(openArticleId) {
        if (openArticleId === this.state.openArticleId) {
            this.setState(
                {
                    openArticleId: null
                }
            )
        } else {
            this.setState({
                openArticleId
            })
        }
    }

}