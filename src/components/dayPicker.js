import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {setFromTo} from '../actions/index'
import {resetDate} from "../actions/index";

class Calendar extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }


    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.props);
        this.props.onChange(range)
    }

    render() {
        const {from, to} = this.props;
        const modifiers = {start: from, end: to};
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from && to && (
                        <button className="link" onClick={() => this.props.resetDate()}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <Helmet>
                    <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
                </Helmet>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    from: state.datePicker.from,
    to: state.datePicker.to
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (range) => dispatch(setFromTo(range)),
    resetDate: () => dispatch(resetDate({from: undefined, to: undefined}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)