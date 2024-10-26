import { toast } from "react-toastify";
import axios from "../services/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onClickButtonRequest } from "../store/modules/example/actions";

export default function Home() {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(onClickButtonRequest());
	}

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get("/api/student");

			if (response) {
				const { data } = response;
				console.log(data);
				return toast.success("fetch data successfully finallized", {
					toastId: "success-id",
				});
			}
		}
		fetchData();
	}, []);
	return (
		<div className="mx-3 p-4 m-auto text-center">
			<h1 className="text-5xl font-bold underline">Home!</h1>
			<button type="button" className="p-2 border my-3" onClick={handleClick}>
				Show Notification
			</button>
		</div>
	);
}
