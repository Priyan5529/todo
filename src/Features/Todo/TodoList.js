import { useContext } from "react";
import Todo from "./Todo";
import { Context } from "../../TodoProvider";

export default function TodoList() {
	const { todos } = useContext(Context);
		return (
		<div className="row-md-4 justify-content-center mt-2">
			<ul className="list-group">
				{todos.map((todo, index) => {
					return <Todo 
					key={index} 
					id={index} 
					todo={todo} />;
				})}
			</ul>
		</div>
	);
}
