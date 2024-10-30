import { useState } from "react";
import Container from "../components/Container";
import validator from "validator";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import axios from "../services/axios";
import { get } from "lodash";
import { useHistory } from "react-router-dom";

export default function Register() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const history = useHistory();
	function handleSubmit(e) {
		e.preventDefault();
		const user = { name, email, password };

		if (validateUser(user)) {
			setEmail("");
			setName("");
			setPassword("");
			setTimeout(() => <Redirect to={{ pathname: "/" }} />, 2000);
		}
	}

	async function validateUser(user) {
		const { id, name, email, password } = user;
		let valid = true;

		if (!name || !email || !password) {
			toast.error("all fields must be filled in", {
				toastId: "error-empty-fields-id",
			});
			valid = false;
		}

		if (name.length < 3 || name.length > 255) {
			toast.error("name must to be between 3 and 255 characters");
			valid = false;
		}

		if (!validator.isEmail(email)) {
			toast.error("invalid email", {
				toastId: "error-invalid-email-id",
			});
			valid = false;
		}

		if (password.length < 8 || password.length > 50) {
			toast.error("password must to be between 8 and 50 characters", {
				toastId: "error-invalid-password-id",
			});
			valid = false;
		}

		if (!valid) return;

		try {
			await axios.post("/api/user/create", {
				id,
				nome: name,
				email,
				password,
			});
			toast.success("user successfully created", { toastId: "success-id" });
			history.push("/");
			window.location.reload();
		} catch (e) {
			const errors = get(e, "response.data.errors", []);
			console.log(errors);
			errors.map((error) => {
				let i = 0;
				toast.error(error, { toastId: `server-error${i++}-id` });
			});
		}
	}

	return (
		<Container>
			<h1 className="text-2xl text-center">Create your account</h1>

			<div className=" mt-4 w-full">
				<form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
					<fieldset className="border-0">
						<input
							type="text"
							name=""
							className="block border outline-gray-800 p-2 rounded-md w-full my-2 focus:outline-primary-color"
							placeholder="Name."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							name=""
							className="block border outline-gray-800 p-2 rounded-md w-full my-2 focus:outline-primary-color"
							placeholder="Email."
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							name=""
							className="block border outline-gray-800 p-2 rounded-md w-full my-2 focus:outline-primary-color"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button
							type="submit"
							className="w-full p-2 bg-primary-color text-white active:bg-active-primary-color"
						>
							Send
						</button>
					</fieldset>
				</form>
			</div>
		</Container>
	);
}
