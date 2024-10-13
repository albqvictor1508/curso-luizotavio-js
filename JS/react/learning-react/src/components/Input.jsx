export default function Input(props) {
	return (
		<input
			type="text"
			className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
			{...props}
		/>
	);
}
