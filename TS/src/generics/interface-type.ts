export type Person<T, U> = {
	name: T;
	surname: T;
	age: U;
};

export interface Person2<T = number, U = string> {
	name: T;
	surname: T;
	age: U;
}

const person1: Person<string, number> = {
	name: "macaco",
	surname: "olivera",
	age: 35,
};

const person2: Person2 = {
  name: 123,
  surname: 456,
  age: "macaco"
}

//types e interfaces podem aderir e abusar dos generics
