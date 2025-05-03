import type { CostumerProtocol,EnterpriseCostumerProtocol } from "./costumer-protocol";

export class IndividualCostumer implements CostumerProtocol {
    private firstName: string;
    private lastName: string;
    private cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }

}

export class EnterpriseCostumer implements EnterpriseCostumerProtocol {
    private name: string;
    private fantasyName: string;
    private cnpj: string
    
    constructor(fantasyName: string, costumerName: string, cnpj: string) {
        this.fantasyName = fantasyName;
        this.name = costumerName;
    }

}