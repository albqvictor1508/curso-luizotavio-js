import { useState } from "react";
import Container from "../components/Container";

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen border-0 outline-0 bg-primary-dark-color pt-4">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-3">About</h1>
        <button type="button" onClick={() => setCount(count + 1)} className="p-1 rounded-md border border-black w-full mx-auto">count is {count}</button>
      </Container>
    </div>
  )
}
