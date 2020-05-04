import React, {Component} from "react";
import Select from "react-select";
import {connect} from "react-redux";
import {setSelections} from "../actions";


class ComboBox extends Component {

    handleChange = selected => {
        this.props.changeSelection(selected)
    }

    render() {
        const {selected, options} = this.props;

        return (
            <div>
                <Select options={options} value={selected} onChange={this.handleChange} isMulti={true}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    selected: state.selections,
    options: state.articles.map(article => ({
        label: article.title,
        value: article.id
    }))
})

const mapDispatchToProps = (dispatch) => ({
    changeSelection: (selected) => dispatch(setSelections(selected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ComboBox)