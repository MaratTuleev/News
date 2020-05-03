import React, {Component} from 'react'
import ArticleList from "./ArticleList";
import Select from "react-select"
import 'react-day-picker/lib/style.css';
import Calendar from "./dayPicker";
import {articles} from '../fixtures';


export default class App extends Component {

    state = {
        selection: null,
    }

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Calendar/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} isMulti={true}/>
                <ArticleList from={this.state.from} to={this.state.to}/>
            </div>
        );
    }

    changeSelection = selection =>
        this.setState({
            selection
        })

}

