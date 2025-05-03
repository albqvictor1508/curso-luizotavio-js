/*
Dependency Inversion

- Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes, Detalhes devem depender de abstrações

Classes de baixo nível são classes que implementam as tarefas (os detalhes)\
Classes de alto nível são classes que gerenciam classes de baixo nível.

Nesse caso é bom lembrar do padrão de projeto Strategy, que utiliza muito disso
*/
export class Car {
    name: string;
    year: number;
    color: string;
}

export class Ferrari extends Car {
    //ferrari
}

export class Bugatti extends Car {
    //bugatti
}

class Driver {
    name: string;
    age: number;
    car: Car;

    constructor(name: string, age: number, car: Car) {
        this.car = car;
        this.age =age;
        this.name = name;
    }
}