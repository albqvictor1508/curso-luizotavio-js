import { useLocation } from "react-router-dom";
import Container from "../components/Container";

export default function Home() {
  const {state} = useLocation();

  async function fetchData() {
    const data = await fetch("/api/student/").then(res => res.json());

    if(!data) return;

    console.log(data);
  }

  return (
    <div className="w-screen h-screen border-0 outline-0 bg-primary-dark-color pt-5">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-4">Home</h1>
        <p className="text-xl">{state as string}</p>
        <button type="button" onClick={fetchData} className="p-1 rounded-md border border-black w-full mx-auto">Log data</button>
      </Container>
    </div>
  )
}
