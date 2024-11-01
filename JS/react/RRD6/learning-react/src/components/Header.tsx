import { Link } from "react-router-dom";
import {Angry, Book, House} from "lucide-react";

export default function Header() {
  return (
    <header className="w-screen p-8 flex items-center justify-center bg-medium-color">
      <nav className="flex gap-5">
        <Link to={"/"}><House size={32} color={"white"} /></Link>
        <Link to={"/about"}><Angry size={32} color ={"white"} /></Link>
        <Link to={"/students"}><Book size={32} color ={"white"} /></Link>
      </nav>
    </header>
  )
}
