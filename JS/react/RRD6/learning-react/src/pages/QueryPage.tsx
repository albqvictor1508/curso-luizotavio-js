import { useParams, useSearchParams } from "react-router-dom";
import Container from "../components/Container";

export default function QueryPage() {
  const {name} = useParams();
  const [query] = useSearchParams();


  return (
    <div className="w-screen h-screen border-0 outline-0 bg-primary-dark-color pt-5">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-4">Home</h1>

        <p>(query string) Name: {name}, Query String: {query.get("idade")}</p>
      </Container>
    </div>
  )
}
