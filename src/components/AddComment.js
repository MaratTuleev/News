import React, {Component} from 'react'
import '../css/styles.css'

export default class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            text: ''
        }
        this.refName = React.createRef();
        this.refText = React.createRef();
    }


    render() {
        return (
            <div>
                <section>
                    Name: <input type='text' ref={this.refName} value={this.state.username}
                                 onChange={this.handleNameChange}/></section>
                <section>Text: <textarea ref={this.refText} value={this.state.text}
                                         onChange={this.handleTextChange}/></section>
                <button>Add comment</button>
            </div>
        )
    }


    handleNameChange = (ev) => {
        this.refName.current.classList.remove('incorrect')
        this.setState({
            username: (ev.target.value.length < 5 || ev.target.value.length > 15) ? this.refName.current.classList.add('incorrect') : ev.target.value
        })
    }
    handleTextChange = (ev) => {
        this.refText.current.classList.remove('incorrect')
        this.setState({
            text: (ev.target.value.length < 20 || ev.target.value.length > 50) ? this.refText.current.classList.add('incorrect') : ev.target.value
        })
    }

}