import React, {Component} from 'react'
import ArticleList from "./ArticleList";
import Select from "react-select"
import 'react-day-picker/lib/style.css';
import Calendar from "./dayPicker";

export default class App extends Component {

    state = {
        selection: null,
        from: undefined,
        to: undefined,
    }

    onDateChange = state => {
        this.setState(
            state
        )
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Calendar from={this.state.from} to={this.state.to} onChange={this.onDateChange}/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} isMulti={true}/>
                <ArticleList articles={this.props.articles} from={this.state.from} to={this.state.to}/>
            </div>
        );
    }

    changeSelection = selection =>
        this.setState({
            selection
        })

}