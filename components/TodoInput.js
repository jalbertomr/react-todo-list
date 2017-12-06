import React, { Component } from 'react';

class TodoInput extends Component {

    constructor() {
        super();
        this.state = {
            TodoInputValue: ''
        };
    }

    handleChange(event) {
        this.setState({
            TodoInputValue: event.target.value
        });
    }

    render() {
        return (
        <div>
            <input
              type='text'
              placeholder='introduce tarea por hacer.'
              value={this.state.TodoInputValue}
              onChange={this.handleChange.bind(this)}
            />
            <button>Enter</button>
        </div>
        );
    }
}

export default TodoInput;
