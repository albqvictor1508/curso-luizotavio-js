import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
	const [searchParams] = useSearchParams(); // react hook
	const title = searchParams.get("title"); //objeto pego do hook via destructuring
	const description = searchParams.get("description");
	const navigate = useNavigate();

	return (
		<div className="w-screen h-screen flex justify-center bg-slate-600 p-6">
			<div className="w-[500px] space-y-4">
				<div className="flex justify-center relative mb-6">
					<button
						onClick={() => navigate("/")} //poderia ser "-1" pra voltar pra pagina que eu tava antes
						type="button"
						className="absolute left-0 top-0 bottom-0 text-slate-100"
					>
						<ChevronLeft />
					</button>
					<h1 className="text-slate-100 text-3xl font-bold text-center">
						Task details
					</h1>
				</div>

				<div className="bg-slate-200 p-4 rounded-md">
					<h2 className="text-xl font-bold text-slate-600">{title}</h2>
					<p className="text-slate-600">{description}</p>
				</div>
			</div>
		</div>
	);
}
