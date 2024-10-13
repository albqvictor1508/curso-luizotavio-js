import { Check, ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

//poderia usar o props mas ja fiz destructuring no parâmetro pra facilitar
export default function Tasks({ tasks, onTaskClick, removeTask }) {
	const navigate = useNavigate();

	function onSeeDetailsClick(task) {
		const query = new URLSearchParams(); // pra evitar erro de espacamento nas query string
		query.set("title", task.title);
		query.set("description", task.description);
		navigate(`/task?${query.toString()}`); //hook do react router pra fazer como fosse o redirect do express no MVC
	}

	return (
		<div>
			<ul className="space-y-1 bg-slate-300 p-4 rounded-md shadow">
				{tasks.map((task) => {
					return (
						<li
							className={`text-white p-2 rounded-md flex space-x-2 ${!task && "hidden"}`}
							key={task.id}
						>
							<button
								type="button"
								className={`flex items-center gap-2 w-full bg-slate-400 p-2 rounded-md text-lg text-left ${task.isCompleted && "line-through"}`}
								onClick={() => onTaskClick(task.id)}
							>
								{task.isCompleted && <Check />}
								{task.title}
							</button>
							<Button onClick={() => onSeeDetailsClick(task)}>
								<ChevronRight />
							</Button>
							<Button onClick={() => removeTask(task.id)}>
								<Trash2 />
							</Button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
