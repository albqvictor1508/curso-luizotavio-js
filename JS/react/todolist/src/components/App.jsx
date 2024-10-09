import "../css/output.css";
import Modal from "./Modal";

export default function App() {
	const teste = "testando 123";
	/*
  <>
    se eu envolver dessa forma, o html retornado vai ser colocado diretamente dentro da div root
  </>
  */
	return (
		<body className="m-0 p-0 box-border outline-0 min-h-screen">
			<Modal />
			<div className="container m-auto max-w-lg mt-3">
				<h1 className="text-4xl underline text-center">Lexa is very hot</h1>

				<p className="text-xl mt-3 pl-1">
					i love lexa with my life and my soul, she's my happiness
				</p>

				<p className="text-2xl text-pink-300 pl-1">{teste}</p>
			</div>
		</body>
	);
}
