export type User = { id: number; email: string; password: string };
const users: User[] = [];

//os objetos JS também funcionam como singletons quando são exportados
//porém, nesse caso, a constante 'users' só existe dentro desse módulo
export const myDatabase = {
	addUser(user: User): void {
		users.push(user);
	},
	removeUserById(userId: number): void {
		const user = users.filter((u) => u.id === userId).shift();
		if (!user) return;
		const userIndex = users.indexOf(user);
		users.splice(userIndex - 1, 1);
	},
	show(): void {
		console.log(users);
	},
};
