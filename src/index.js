import React from 'react'
import {render} from 'react-dom'
import Article from "./Article";
import {articles, normalizedArticles} from "./fixtures";

render(<Article article={articles[0]} normalizedArticles = {normalizedArticles[0]}/>, document.getElementById('root'))