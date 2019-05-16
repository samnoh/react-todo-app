import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoAppStyles';
import { TodosProvider } from './Contexts/todos.context';

function TodoApp({ classes }) {
	return (
		<Paper className={classes.paper} elevation={0}>
			<AppBar className={classes.appBar} color="primary" position="static">
				<ToolBar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</ToolBar>
			</AppBar>
			<Grid className={classes.grid} container justify="center">
				<Grid item xs={11} md={8} lg={5}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default withStyles(styles)(TodoApp);
