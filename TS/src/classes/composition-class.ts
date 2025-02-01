class Car {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

class Motor {

  ligar(): void {
    console.log("Estou ligando...");
  }

  desligar(): void {
    console.log("Estou desligando...");
  }
}

const car = new Car();
car.ligar();
