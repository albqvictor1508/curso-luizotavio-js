export interface CostumerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
    cnpj: string;
}

export interface CostumerOrder {
    getName(): string;
    getIDN(): string;
}

export interface EnterpriseCostumerProtocol extends CostumerOrder {
    cnpj: string;
    name: string;
    fantasyName: string;    
}


export interface IndividualCostumerProtocol extends CostumerOrder {
    firstName: string;
    lastName: string;
    cpf: string;

}