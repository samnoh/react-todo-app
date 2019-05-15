import React from 'react';
import Todo from './Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList(props) {
	return (
		<Paper>
			<List>
				{props.todos.map((todo) => (
					<React.Fragment>
						<Todo key={todo.id} task={todo.task} completed={todo.completed} />
						<Divider />
					</React.Fragment>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;