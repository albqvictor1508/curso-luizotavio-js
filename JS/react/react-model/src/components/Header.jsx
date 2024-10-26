import { Home, User, DoorOpen } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
	const botaoLigado = useSelector((state) => state.reducers.botaoLigado);
	return (
		<header className="flex justify-center p-5  items-center bg-primary-color">
			<div className="flex gap-5 font-bold text-xl text-gray-900 items-center w-[1200px] mx-auto justify-center">
				<a href="/route" className="p-2 rounded-md">
					<Home className="text-white" />
				</a>
				<a href="/route" className="p-2 rounded-md">
					<User className="text-white" />
				</a>
				<a href="/teste">
					<DoorOpen className="text-white" />
				</a>
				{botaoLigado ? "CLICADO" : "NAO CLICADO"}
			</div>
		</header>
	);
}
