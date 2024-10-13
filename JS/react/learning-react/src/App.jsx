import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

export default function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || [],
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]); //só vai executar a função quando oque tiver dentro do array for alterado

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos/1",
			);
			const data = response.json();
			setTasks(data);
		}
		//POSSO CHAMAR ESSA FUNÇÃO CASO QUEIRA RECEBER DADOS DE UMA FAKE API
	}, []);

	function onTaskClick(taskId) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, isCompleted: !task.isCompleted };
			}
			return task;
		});
		setTasks(newTasks);
	}

	function removeTask(taskId) {
		//usar filter em vez de map para exibir somente as li's que não possuem o mesmo id da li clicada
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	}

	function addTaskOnSubmit(title, description) {
		const newTasks = {
			id: v4(),
			title,
			description,
			isCompleted: false,
		};
		//coloca tudo que tem dentro de tasks no state, adicionando a nova task, e por estar atualizando um estado, não poderia simplesmente fazer um "tasks.push(newTasks), porque não alteraria o estado"
		setTasks([...tasks, newTasks]);
	}

	function validateTask(title, description) {
		let valid = true;
		tasks.map((task) => {
			if (task.title === title || task.description === description) {
				console.log("ERROR");
				valid = false;
			}
			console.log(title, description);
			if (title.length < 3 || description.length < 3) {
				console.log("ERROR");
				valid = false;
			}

			return valid;
		});
	}

	return (
		<div className="w-screen h-screen flex justify-center bg-slate-600 p-6">
			<div className="w-[500px] space-y-4">
				<Title>Task Manager</Title>
				<AddTasks
					addTaskOnSubmit={addTaskOnSubmit}
					validateTask={validateTask}
				/>
				<Tasks
					tasks={tasks}
					onTaskClick={onTaskClick}
					removeTask={removeTask}
				/>
			</div>
		</div>
	);
}
