import { useState } from "react";
import Input from "./Input";

export default function AddTasks({ addTaskOnSubmit, validateTask }) {
	const [title, setTitle] = useState("");
	const [description, setDesc] = useState("");
	console.log({ title, description });
	return (
		<div className="bg-slate-400 shadow rounded-md p-6 space-y-4 flex flex-col">
			<Input
				type="text"
				className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
				placeholder="Type the title of the task"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Input
				placeholder="Type the description of the task"
				value={description}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<button
				className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
				type="button"
				onClick={() => {
					//trim remove espaço
					if (!title.trim() || !description.trim()) {
						return alert("Fill in the title and description of the task");
					}
					addTaskOnSubmit(title, description);
					setTitle("");
					setDesc("");
				}}
			>
				Add Task
			</button>
		</div>
	);
}
