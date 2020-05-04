import { combineReducers } from 'redux'
import datePicker from './datePicker'
import articles from "./articles";
import selections from "./selections";

export default combineReducers({
    datePicker,
    articles,
    selections
})
