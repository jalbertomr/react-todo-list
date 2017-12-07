import React, { Component } from 'react';
import actions from '../redux/actions';

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

    handleEnter(event) {
        event.preventDefault();
        console.log('Enter button clicked.');
        this.props.dispatch(actions.addTodo(this.state.TodoInputValue));
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
            <button onClick={this.handleEnter.bind(this)}>Enter</button>
        </div>
        );
    }
}

export default TodoInput;
