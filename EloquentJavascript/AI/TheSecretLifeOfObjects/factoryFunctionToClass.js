class Car {
  constructor(carModel) {
    this.carModel = carModel;
  }

  currentSpeed = 0;
  isEngineOn = false;

  startEngine() {
    this.isEngineOn = true;
  }

  stopEngine() {
    this.isEngineOn = false;
  }

  drive(speed) {
    if (this.isEngineOn) {
      this.currentSpeed = speed;
      console.log(`${this.carModel} is driving at ${this.currentSpeed} mph`);
    } else {
      console.log("Turn on the engine first!");
    }
  }
}

let sportsCar = new Car("sportsCar");
sportsCar.drive(120);
sportsCar.startEngine();
sportsCar.drive(120);
