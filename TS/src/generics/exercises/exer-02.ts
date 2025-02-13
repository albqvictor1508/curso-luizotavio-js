const dev = {
	name: "John Doe",
	salary: 999,
};

const dev2 = {
	name: "Cuca Beludo",
	salary: 1000,
};

function devsSalary(salary: { salary: number }) {
	console.log(`Seu salário é: ${salary}`);
}

devsSalary(dev);

function devsSalary2(salaryObj: { [key: string]: number | string }) {
	console.log(`Seu salário é: ${salaryObj.salary} (index signature)`);
}

devsSalary2(dev2);

//a primeira forma tipa somente a chave salary, a segunda forma tipa todo o objeto, chamada de index signature
