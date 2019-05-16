import React, { createContext } from 'react';
import useTodoState from '../Hooks/useTodoState';

export const TodosContext = createContext();

export function TodosProvider(props) {
	const todosObj = useTodoState([]);

	return <TodosContext.Provider value={todosObj}>{props.children}</TodosContext.Provider>;
}
