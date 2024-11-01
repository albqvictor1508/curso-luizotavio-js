import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

export default function Redirect() {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current); //limpa o timeout anterior
    timeout.current = setTimeout(() => { //muda o valor(como fosse um useState) para um novo timeout que tira 1 de time
      setTime(t => t - 1)

      if(time === 0) {
        navigate("/", {state: `this is the state: ${Math.floor(Math.random() * 10)}`});
      }

    }, 1000) //sempre que passar um segundo esse useEffect é chamado
  }, [time])

  return (
    <div className="w-screen h-screen bg-primary-dark-color pt-5">
      <Container>
        <h1 className="text-black text-2xl">Get out of here in: {time}</h1>
      </Container>
    </div>
  )
}
