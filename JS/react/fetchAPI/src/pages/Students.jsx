import { useEffect, useState } from "react";
import { get } from "lodash";
import Container from "../components/Container";
import axios from "../services/axios";
import { User, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { history } from "../services/history";

export default function Students() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		async function getStudents() {
			const { data } = await axios.get("/api/student/");
			setStudents(data);
		}

		getStudents();
	}, []);

	function handleClick(studentId) {
		console.log("fui chamado");

		function deleteStudent() {
			const newStudents = students.filter(
				(student) => student.id !== studentId,
			);

			setStudents([...students, newStudents]);
			console.log(students);
		}

		return (
			<div className="w-screen h-screen bg-black opacity-15 flex justify-center items-center">
				<Container>
					<h2>You want to delete this student?</h2>

					<div className="flex flex-1">
						<button type="button" className="bg-primary-dark-color px-1 py-2">
							Yes
						</button>
						<button
							type="button"
							className="bg-primary-color px-1 py-2"
							onClick={deleteStudent}
						>
							No
						</button>
					</div>
				</Container>
			</div>
		);
	}

	return (
		<Container>
			<h1 className="text-2xl">Students</h1>
			<div>
				{students.map((student) => (
					<div key={student.id} className="space-y-2 mt-4">
						<div className="flex items-center justify-between border-b-2 pb-1.5">
							{get(student, "Photos[0].url", false) ? (
								<img
									src={student.Photos[0].url}
									alt=""
									crossOrigin=""
									className="w-10 rounded-full object-contain "
								/>
							) : (
								<User
									size={40}
									color="white"
									className="p-1 rounded-full bg-black"
								/>
							)}

							<p>{student.nome}</p>
							<p>{student.email}</p>

							<div className="flex gap-7">
								<Link to={"/login"} className="cursor-pointer">
									<Pencil size={18} />
								</Link>

								<Trash2
									size={18}
									onClick={() => handleClick(student.id)}
									className="cursor-pointer"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
