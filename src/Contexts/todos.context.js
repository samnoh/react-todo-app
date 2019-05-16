import React, { createContext, useReducer } from 'react';
import todoReducer from '../Reducer/todo.reducer';
import useTodoState from '../Hooks/useTodoState';

export const TodosContext = createContext();

export function TodosProvider(props) {
	const [ todos, dispatch ] = useReducer(todoReducer, []);

	return <TodosContext.Provider value={{ todos, dispatch }}>{props.children}</TodosContext.Provider>;
}
