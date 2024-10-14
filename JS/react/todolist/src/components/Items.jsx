import { Trash2 } from "lucide-react";

export default function Items({ tasks, removeTask }) {
	return (
		<div className="w-[450px] flex flex-col">
			{tasks.map((task) => {
				return (
					<li
						key={task.id}
						className="w-full border-b-2 flex space-x-2 p-2 my-2"
					>
						<button type="button" className="w-full text-left">
							{task.title}
						</button>
						<button type="button" onClick={() => removeTask(task.id)} >
							<Trash2 />
						</button>
					</li>
				);
			})}
		</div>
	);
}
