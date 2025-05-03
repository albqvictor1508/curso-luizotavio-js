import type { CostumerProtocol,EnterpriseCostumerProtocol } from "./costumer-protocol";

export class IndividualCostumer implements CostumerProtocol {
     firstName: string;
     lastName: string;
     cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
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

}