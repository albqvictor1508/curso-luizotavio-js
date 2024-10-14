import { useState } from "react";

export default function AddItem({addTaskOnSubmit}) {
  const [title, setTitle] = useState("");
	return (
		<div className="w-[450px] flex flex-col space-y-4">
			<input
				type="text"
				className="px-2 py-2 w-full rounded-md text-gray-900 border-b-2"
				placeholder="Type your task here."
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
			/>

			<button
				type="button"
				className="p-2 w-full rounded-md text-white bg-gray-800 border-0 "
        onClick={() => {
          if(!title) return alert("Fill in the title field");
          addTaskOnSubmit(title);
          setTitle("");
        }}
			>
				Add Item
			</button>
		</div>
	);
}
