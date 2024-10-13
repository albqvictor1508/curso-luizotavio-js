export default function AddItem() {
	return (
		<div className="w-[400px] flex flex-col space-y-4 p-4">
			<input
				type="text"
				className="px-2 py-4 w-full rounded-md text-gray-200 border-b-2"
				placeholder="Type your task here."
			/>

			<button
				type="button"
				className="p-2 w-full rounded-md text-white bg-gray-800 border-0 "
			>
				Add Item
			</button>
		</div>
	);
}
