class User {
	constructor(
		public id: number,
		public name: string,
		private age: number,
	) {}
}

class Practice2 {
	private static instance: Practice2 | null = null;
	private users: User[] = [];

	private constructor() {}

	public static getInstance() {
		if (Practice2.instance === null) {
			Practice2.instance = new Practice2();
		}
		return Practice2.instance;
	}

	public addUser(user: User): void {
		this.users.push(user);
	}

	public removeUserById(userId: number): void {
		const user = this.users.filter((u) => u.id === userId).shift();
		if (!user) return;
		const userIndex = this.users.indexOf(user);
		this.users.splice(userIndex - 1, 1);
	}

	public show(): void {
		console.log(this.users);
	}
}
