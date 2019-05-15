import React from 'react';
import useInputState from './Hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/EditTodoFormStyles';

function EditTodoForm(props) {
	const { id, task, editTodo, toggleEditForm, classes } = props;
	const [ value, handleChange, reset ] = useInputState(task);

	return (
		<form
			className={classes.form}
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEditForm();
			}}
		>
			<TextField value={value} onChange={handleChange} margin="normal" fullWidth autoFocus />
		</form>
	);
}

export default withStyles(styles)(EditTodoForm);
