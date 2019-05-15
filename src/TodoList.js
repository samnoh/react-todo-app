import React from 'react';
import Todo from './Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList(props) {
	const { todos, removeTodo, toggleTodo } = props;

	return (
		<Paper>
			<List>
				{todos.map((todo) => (
					<React.Fragment>
						<Todo key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} {...todo} />
						<Divider />
					</React.Fragment>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
