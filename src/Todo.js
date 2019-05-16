import React, { useContext } from 'react';
import classNames from 'classnames';

import { TodosContext } from './Contexts/todos.context';
import useToggleState from './Hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CancleIcon from '@material-ui/icons/CancelRounded';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoStyles';

function Todo(props) {
	const { id, task, completed, classes } = props;
	const { dispatch } = useContext(TodosContext);
	const [ isEditing, toggle ] = useToggleState(false);

	return (
		<ListItem className={classes.listItem}>
			{isEditing ? (
				<React.Fragment>
					<EditTodoForm id={id} task={task} toggleEditForm={toggle} />
					<IconButton aria-label="Cancle" onClick={toggle}>
						<CancleIcon />
					</IconButton>
				</React.Fragment>
			) : (
				<React.Fragment>
					<CheckBox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id: id })} />
					<ListItemText className={classNames({ [classes.listItemText]: completed })}>{task}</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Delete" onClick={() => dispatch({ type: 'REMOVE', id: id })}>
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</React.Fragment>
			)}
		</ListItem>
	);
}

export default withStyles(styles)(Todo);
