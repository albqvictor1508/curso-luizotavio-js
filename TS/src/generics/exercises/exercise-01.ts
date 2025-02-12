type NaoSei = <T, U extends keyof T>(obj: T, key: U) => T[U]; //recebe o obj do tipo T, uma chave do tipo U(que é uma chave de T) e retorna o valor dessa chave

const macaco = {
	name: "césar",
	age: 22,
	bairro: "centro",
};

const getValueOfKey: NaoSei = (obj, key) => obj[key];

const macaco2 = ["prego", "gorilla", "meu pai"]; //se eu colocar um array, as chaves são os métodos da classe Array, do próprio JS
