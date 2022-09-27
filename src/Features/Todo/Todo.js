import { useContext } from "react";
import Button from "../../components/UI/Button";
import { Context  } from "../../TodoProvider";
import "./Todo.css";

export default function Todo({ todo, id }) {
	const { deleteTodo, completeTodo } = useContext(Context);
	return (
		<div className="list">
			<p key={id}>
				{todo.text}
				<span>
					<Button className='button' value='Delete' onClick={() => {deleteTodo(id); }} />
				</span>
			</p>
		</div>
		/*<li
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			key={id}
			className="shadow list-group-item list-group-item-action text-center pointer m-0 p-2"
		>
			<span onClick={() => completeTodo(id)}>{todo.text}</span>
			<Button
				onClick={() => {
					deleteTodo(id);
				}}
				className="btn btn-danger pointer float-right"
				value="Delete"
			/>
		</li>*/
	);
}