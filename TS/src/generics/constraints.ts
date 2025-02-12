// type ConstraintExample = <O, K>(obj: O, key: K) => O[K]; //não funcionaria pq K pode ser qualquer coisa, inclusive valores que não podem ser chave de um objeto.

type ConstraintReal = <O, K extends keyof O>(obj: O, key: K) => O[K]; //nesse caso, o tipo de K só pode ser chave de O

interface carro {
	nome: string;
}

interface ford extends carro {
	surname: string;
}

const ka: ford = {
	nome: "ford ká",
	surname: "mto fraco",
};

const testFn: ConstraintReal = (obj, key) => obj[key];

const nome = testFn(ka, "nome");
console.log(nome);
