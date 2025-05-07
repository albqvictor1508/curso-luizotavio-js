export type User = { id: number; email: string; password: string };

//assim, criando uma IIFE function como factory, eu consigo ter a constante 'user' dentro do closure que vai ser exportado
export const myDatabaseFunc = (() => {
	const users: User[] = [];
	return {
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
})();
