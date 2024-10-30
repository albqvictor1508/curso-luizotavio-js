import { Home, User, DoorOpen, NotebookIcon } from "lucide-react";

export default function Header() {
	return (
		<header className="flex justify-center p-5  items-center bg-primary-color">
			<div className="flex gap-5 font-bold text-xl text-gray-900 items-center w-[1200px] mx-auto justify-center">
				<a href="/" className="p-2 rounded-md">
					<Home className="text-white" />
				</a>
				<a href="/login" className="p-2 rounded-md">
					<User className="text-white" size={24} />
				</a>
				<a href="/register">
					<DoorOpen className="text-white" size={24} />
				</a>

				<a href="/test">
					<NotebookIcon className="text-white" size={24} />
				</a>
			</div>
		</header>
	);
}
