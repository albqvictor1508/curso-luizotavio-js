//mesma coisa do type alias saporra
export interface Person {
	name: string;
	surname: string;
	age: number;
}

class Victor implements Person {
	constructor(
		public name: string,
		public surname: string,
		public age: number,
	) {}
}
