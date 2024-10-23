export default function Login() {
	return (
		<div className="w-screen">
			<div className="w-[500px] m-auto text-center flex flex-col space-y-2 p-4 my-3">
				<h1 className="text-4xl font-bold text-primary-dark-color">LOGIN</h1>
				<input
					type="text"
					className="block border p-0.5 rounded-md outline-primary-dark-color m-auto"
				/>
				<input
					type="text"
					className="block border p-0.5 rounded-md outline-primary-dark-color m-auto"
				/>
			</div>
		</div>
	);
}
