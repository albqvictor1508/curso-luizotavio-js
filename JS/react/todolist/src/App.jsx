import AddItem from "./components/AddItem";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Items from "./components/Items";

export default function App() {
	const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function addTaskOnSubmit(title) {
    const newItem = {
      id:v4(),
      title,
    }
    setTasks([...tasks, newItem]);
  }

  function removeTask(taskId) {
    const newItem = tasks.filter(task => task.id !== taskId);

    setTasks(newItem);
  }

	return (
		<div className="w-screen h-screen">
			<div className="w-[450px] mx-auto space-y-4 my-4">
				<h1 className="text-3xl text-gray-900 p-3 font-bold text-center">Todo List</h1>
				<AddItem addTaskOnSubmit={addTaskOnSubmit} />
				<Items tasks={tasks} removeTask={removeTask} />
			</div>
		</div>
	);
}
