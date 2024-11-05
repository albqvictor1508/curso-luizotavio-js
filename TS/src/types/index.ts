/*
  TYPE ANNOTATION

  n tem sentido em tipar um let que pode ser mudado
*/

const person: { name: string; surname: string; adult?: boolean } = {
	name: "vito",
	surname: "de lexa",
};

console.log(person);

const person2: (name: string, surname: string) => string = (name, surname) => {
	return `${name} ${surname}`;
};

//TIPO ANY => qualquer tipo (se for pra ta usando isso aqui n instala o TS seu otário)

// const car = (name: any) => {
// 	return name;
// };

//TIPO VOID => geralmente se encontra em função, por exemplo em uma função que não tem retorno algum

function sayMyName(name: string): void {
	console.log(name);
}

const myLove = sayMyName("lexa");
//myLove assumindo o type void

const zeroReturn = (...args: string[]): void => {
	console.log(args);
};

// zeroReturn("vito", "arruda", "de", "lexa", "gostosa");

//TIPO OBJECT

const objeto = {
	chave1: "valor1",
	chave2: "",
};

//TIPO ARRAY

function multiplyNumbers(...args: number[]): number {
	return args.reduce((count, value) => count * value, 1); //1: oque vai fazer, 2: o valor inicial do acumulador
}

console.log(multiplyNumbers(2, 2, 2));

// function concatStrings(...args: string[]): string {
// 	return args.reduce((ac, value) => ac + (value + " "), "");
// }

// console.log(concatStrings("vito", "de", "lexa"));

function toUpperCase(...args: string[]): string[] {
	return args.map((string) => string.toUpperCase());
}

console.log(toUpperCase("vito", "de", "lexa"));
