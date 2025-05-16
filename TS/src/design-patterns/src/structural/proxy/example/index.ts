export interface ExampleSubject {
	request(): void;
}

export class ExampleRealSubject implements ExampleSubject {
	request(): void {
		console.log("Algo que meu objeto faz");
	}
}

export class ExampleProxy implements ExampleSubject {
	constructor(private subject: ExampleSubject) {}
	request(): void {
		console.log("meu proxy faz algo");
		this.subject.request();
		console.log("meu proxy agindo novamente");
	}
}
