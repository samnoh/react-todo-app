import React, { useContext } from 'react';
import { DispatchContext } from './Contexts/todos.context';
import useInputState from './Hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/EditTodoFormStyles';

function EditTodoForm(props) {
	const { id, task, toggleEditForm, classes } = props;
	const dispatch = useContext(DispatchContext);
	const [ value, handleChange, reset ] = useInputState(task);

	return (
		<form
			className={classes.form}
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDIT', id: id, newTask: value });
				reset();
				toggleEditForm();
			}}
		>
			<TextField value={value} onChange={handleChange} margin="normal" fullWidth autoFocus />
		</form>
	);
}

export default withStyles(styles)(EditTodoForm);
