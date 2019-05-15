import React, { useState } from 'react';
import uuid from 'uuid/v4';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoAppStyles';

function TodoApp({ classes }) {
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			task: 'test todos',
			completed: false
		}
	]);

	const addTodo = (newTodoText) => {
		setTodos([ ...todos, { id: uuid(), task: newTodoText, completed: false } ]);
	};

	const removeTodo = (todoId) => {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, task: newTask } : todo));
		setTodos(updatedTodos);
	};

	return (
		<Paper className={classes.paper} elevation={0}>
			<AppBar className={classes.appBar} color="primary" position="static">
				<ToolBar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</ToolBar>
			</AppBar>
			<Grid className={classes.grid} container justify="center">
				<Grid item xs={11} md={8} lg={5}>
					<TodoForm addTodo={addTodo} />
					<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default withStyles(styles)(TodoApp);
