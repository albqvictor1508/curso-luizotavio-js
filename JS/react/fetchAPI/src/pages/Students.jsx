import { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "../services/axios";

export default function Students() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		async function getStudents() {
			const { data } = await axios.get("/api/student/");
			console.log(data);
			setStudents(data);
		}
		getStudents();
	}, []);

	return (
		<Container>
			<h1>teste</h1>
			{students.map((student) => {
				return (
					<div>
						<p className="font-bold text-pink-400" key={String(student.id)}>
							{student.nome}
						</p>
						<p className="font-bold text-pink-400">{student.sobrenome}</p>
						<p className="font-bold text-pink-400">{student.idade}</p>
						<p className="font-bold text-pink-400">{student.email}</p>
					</div>
				);
			})}
		</Container>
	);
}
