import React from 'react';
import classNames from 'classnames';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoStyles';

function Todo(props) {
	const { task, completed, classes } = props;

	return (
		<ListItem>
			<CheckBox tabIndex={-1} checked={completed} />
			<ListItemText className={classNames({ [classes.listItemText]: completed })}>{task}</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label="Delete">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="Edit">
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export default withStyles(styles)(Todo);
