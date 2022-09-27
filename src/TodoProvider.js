import { useState, createContext } from 'react';
import React from 'react';

export const Context =createContext(null);

const TodoProvider = ({ children}) => {
    const [todos, setTodos] = useState([]);

	const addTodo = (todoValue) => {
		if(todoValue.length === 0){
			alert("This field cannot be empty");
		}
		else{
			const newTodo = { text: todoValue, completed: false };
		setTodos([ ...todos,newTodo]);
		}
		
	};

	const completeTodo = (id) => {
		const newTodos = [...todos];
		newTodos[id].isCompleted = !newTodos[id].isCompleted;
		setTodos(newTodos);
	};

	const deleteTodo = (id) => {
		const newTodos = todos.filter((_, index) => index !== id);
		setTodos(newTodos);
	};
  return <Context.Provider
  value={{
     todos,
     deleteTodo,
     completeTodo,
     addTodo,
  }}
  >{ children }
  </Context.Provider>;
}
export default TodoProvider;
