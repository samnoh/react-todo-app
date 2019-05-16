import uuid from 'uuid/v4';

const reducer = (todos, action) => {
	switch (action.type) {
		case 'ADD':
			return [ ...todos, { id: uuid(), task: action.task, completed: false } ];
		case 'REMOVE':
			return todos.filter((todo) => todo.id !== action.id);
		case 'TOGGLE':
			return todos.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		case 'EDIT':
			return todos.map((todo) => (todo.id === action.id ? { ...todo, task: action.newTask } : todo));
		default:
			return todos;
	}
};

export default reducer;
