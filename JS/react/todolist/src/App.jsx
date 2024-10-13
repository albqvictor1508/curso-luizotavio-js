import AddItem from "./components/AddItem";
import { useState } from "react";
import { v4 } from "uuid";
import Items from "./components/Items";

export default function App() {
	const [tasks, setTasks] = useState([
		{
			id: v4(),
			title: "amar alexsa!",
		},
	]);
	return (
		<div className="w-screen h-screen">
			<div className="w-[400px] mx-auto my-4">
				<h1 className="text-3xl text-gray-900 p-6 font-bold">Todo List</h1>
				<AddItem />
				<Items tasks={tasks} />
			</div>
		</div>
	);
}
