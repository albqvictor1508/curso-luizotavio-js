const cars: Array<string> = ["mustang", "renegade eca", "ferrari"];

const promisse: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(1508);
	}, 2000);
});
