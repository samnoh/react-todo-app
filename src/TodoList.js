import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList(props) {
	const { todos, removeTodo, toggleTodo, editTodo } = props;

	if (todos.length) {
		return (
			<Paper>
				<List>
					{todos.map((todo, index) => (
						<React.Fragment key={todo.id}>
							<Todo {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
							{index < todos.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Paper>
		);
	}
	return null;
}

export default TodoList;
