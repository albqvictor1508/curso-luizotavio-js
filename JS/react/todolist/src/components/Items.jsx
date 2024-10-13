import { Trash2 } from "lucide-react";

export default function Items({ tasks }) {
	return (
		<div className="w-[400px] flex flex-col">
			{tasks.map((task) => {
				return (
					<li
						key={task.id}
						className="w-full border-b-2 flex space-x-2 bg-yellow-400"
					>
						<button type="button" className="w-full text-left bg-blue-400">
							{task.title}
						</button>
						<button type="button">
							<Trash2 />
						</button>
					</li>
				);
			})}
		</div>
	);
}
