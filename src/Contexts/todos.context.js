import React, { createContext } from 'react';
import todoReducer from '../Reducer/todo.reducer';
import useLocalStorageReducer from '../Hooks/useLocalStorageReducer';

// import useTodoState from '../Hooks/useTodoState';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	const [ todos, dispatch ] = useLocalStorageReducer('todos', [], todoReducer);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
