import React, { useContext } from 'react';
import useInputState from './Hooks/useInputState';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoFormStyles';
import { TodosContext } from './Contexts/todos.context';

function TodoForm({ classes }) {
	const [ value, handleChange, reset ] = useInputState('');
	const { addTodo } = useContext(TodosContext);

	return (
		<Paper className={classes.paper}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				<TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth />
			</form>
		</Paper>
	);
}

export default withStyles(styles)(TodoForm);
