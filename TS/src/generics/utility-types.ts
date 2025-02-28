export type Person = {
	name?: string;
	surname?: string;
	age?: number;
};
export type RequiredPerson = Required<Person>;
export type OptionalPerson = Partial<Person>;
export type SomeOptionalsPerson = Pick<Person, "name" | "surname" | "age">;

const obj1: Person = {
	name: "victor",
	surname: "arruda",
};

const obj2: RequiredPerson = {
	name: "victor",
	surname: "arruda",
	age: 18,
};

const obj3: OptionalPerson = {
	name: "victor",
	surname: "arruda",
	age: 18,
};

const obj4: SomeOptionalsPerson = {
	name: "victor",
	surname: "arruda",
	age: 18,
};

export type ABC = "A" | "B" | "C";
export type CDE = "C" | "D" | "E";
export type ExcludeABC = Exclude<ABC, CDE>; //vai retirar do ABC todos os tipos que estão em CDE, ou seja, o C é comum entre os dois e será cortado, e "A" e "B" serão meus tipos
export type ExtractABC = Extract<ABC, CDE>; //vai retirar do ABC o tipo que é comum entre os dois, ou seja, só o C vai ser retornado

//CONCLUSÃO: Exclude vai retornar todos que não possuem em comum, Extract vai retornar todos que estão em comum, TUDO ISSO DO PRIMEIRO TIPO, que no caso seria o ABC

//o Mongo sempre retorna o id dessa maneira, com a hashtag na frente, e geralmente nós utilizamos o id sem essa underline, vamos resolver isso com Generics
export type AccountMongo = {
	_id: string;
	name: string;
	age: number;
};

export type AccountApi = Pick<
AccountMongo,
Exclude<keyof AccountMongo, "_id">
> & { id: string };
//de todo o tipo de Pick, eu seleciono o _id, e faço um exclude entre todas as chaves do objeto e a chave _id, ou seja, se de um lado eu to pegando o objeto inteiro, e do outro lado tem uma chave só, o Exclude vai retornar todas as outras chaves, já que ele retorna oque não possue em comum, outro exemplo:
export type Test = Exclude<keyof Person, "name">;
