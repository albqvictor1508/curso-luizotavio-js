export class Company {
	private readonly jobTitle: string = "company";
	private name: string;
	private readonly employees: Employee[] = [];
	protected readonly CNPJ: string;

	constructor(name: string, CNPJ: string) {
		this.name = name;
		this.CNPJ = CNPJ;
	}

	setEmployee(...employees: Employee[]): void {
		for (const employee of employees) {
			this.employees.push(employee);
		}
	}
}

export class Employee {
	private readonly jobTitle: string = "employee";

	constructor(
		private name: string,
		private surname: string,
		private age: number,
	) {}
}

const pitoco = new Employee("vito", "pitoco", 18);
const lexa = new Employee("lexsa", "gerente", 17);

const pixBet = new Company("Pix Bet", "12313123123");
pixBet.setEmployee(lexa, pitoco);
console.log(pixBet);
console.log(pitoco);
