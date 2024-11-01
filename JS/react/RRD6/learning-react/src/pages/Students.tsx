import { useEffect, useState } from "react";
import Container from "../components/Container";
import { User } from "lucide-react";
import {get} from "lodash";
import { Outlet } from "react-router-dom";

export default function Students() {
  interface Student {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    idade: number;
    turno: string;
    Photos: [{
      url: string
    }]
  }
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/student").then(res => res.json());

      if(!data) {
        console.log("error in fetch");
        return;
      }

      console.log(data);
      setStudents(data);
    }

    fetchData();
  }, [])

  return (
    <div className="w-screen h-screen bg-primary-dark-color pt-5">
      <Container>
        <h1 className="text-black text-2xl">Students</h1>

        <div>
          {students.map((student) => (
            <div key={student.id} className="p-1 border-b-2 flex justify-between items-center w-full">
              {get(student, "Photos[0].url", false) ? (
                <img src={student.Photos[0].url} alt="" crossOrigin="" className="w-10 rounded-full object-contain" />
              ) : (
                <User />
              )}
              <p>{student.nome}</p>
              <p>{student.idade}</p>
            </div>
          ))}
        </div>
        <Outlet />
      </Container>
    </div>
  )
}
