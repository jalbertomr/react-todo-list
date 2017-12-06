import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
	render() {
		return (
		<div>
            <h1>Por Hacer</h1><br />
            <TodoInput />
            <TodoList />
        </div>
		);
	}
}

export default App;
