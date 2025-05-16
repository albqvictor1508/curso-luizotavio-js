export interface ExampleSubject {
	request(): void;
}

export class ExampleRealSubject implements ExampleSubject {
	request(): void {
		console.log("Algo que meu objeto faz");
	}
}
