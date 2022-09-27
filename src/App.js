import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./Features/Todo/TodoList";
import AddTodo from "./Features/Todo/AddTodo";
import TodoProvider from "./TodoProvider";
function TodoApp() {


	return (
		<TodoProvider>
			<div className="container">
				<div style={{ margin: '100px'}}>
					<div style={{margin:'50px'}}>
						<Header />
						<div style={{margin:'10px', textAlign:'center'}}>
							<AddTodo />
						</div>
						<TodoList />
					</div>
				</div>
			</div>
		</TodoProvider>

	);
}

export default TodoApp;