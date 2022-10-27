import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            Comments: '',
            Topic: 'React'
        }
    }

    handleUsernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            Comments: event.target.value
        })
    }

    handleTopicchange = event => {
        this.setState({
            Topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.Comments} ${this.state.topic}`)
            
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.handleUsernamechange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.Comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <lable>Topic</lable>
                    <select value={this.state.topic} onChange={this.handleTopicchange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form