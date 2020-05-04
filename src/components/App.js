import React, {Component} from 'react'
import ArticleList from "./ArticleList";
import 'react-day-picker/lib/style.css';
import Calendar from "./dayPicker";
import ComboBox from "./ComboBox";


export default class App extends Component {



    render() {
        return (
            <div>
                <Calendar/>
                <ComboBox/>
                <ArticleList/>
            </div>
        );
    }



}

