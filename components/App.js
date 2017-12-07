import { connect } from 'react-redux';
import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


class App extends Component {
	render() {
		return (
		<div>
            <h1>Por Hacer</h1><br />
            <TodoInput dispatch={this.props.dispatch} />
            <TodoList todos={this.props.todos} />
        </div>
		);
	}
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
