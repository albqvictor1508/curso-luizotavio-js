export default function Button(props) {
	return (
		<button {...props} type="button" className="bg-slate-400 p-2 rounded-md">
			{props.children}
		</button>
	);
}
