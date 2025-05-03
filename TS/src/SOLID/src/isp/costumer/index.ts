import type { CostumerProtocol,EnterpriseCostumerProtocol, IndividualCostumerProtocol } from "./costumer-protocol";

export class IndividualCostumer implements IndividualCostumerProtocol {
     firstName: string;
     lastName: string;
     cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }
    getName(): string {
        return this.firstName + " " + this.lastName;
    }
    getIDN(): string {
        return this.cpf;
    }

}

export class EnterpriseCostumer implements EnterpriseCostumerProtocol {
     name: string;
     fantasyName: string;
     cnpj: string;
    
    constructor(fantasyName: string, costumerName: string, cnpj: string) {
        this.fantasyName = fantasyName;
        this.name = costumerName;
        this.cnpj = cnpj;
    }
    getName(): string {
        return this.name;
    }
    getIDN(): string {
        return this.cnpj;
    }

}