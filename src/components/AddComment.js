import React, {Component} from 'react'
import '../css/styles.css'

export default class AddComment extends Component {

    state = {
        username: '',
        comment: ''
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name: <input value={this.state.username}
                                 onChange={this.handleChange('username')}
                                 className={this.getClassName('username')}/>
                    Text: <input value={this.state.comment}
                                 onChange={this.handleChange('comment')}
                                 className={this.getClassName('comment')}/>
                    <input type='submit' value='Add comment'></input>
                </form>
            </div>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            username: '',
            comment: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'incorrect' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }

}

const limits = {
    username: {
        min: 5,
        max: 15
    },
    comment: {
        min: 20,
        max: 50
    }
}


