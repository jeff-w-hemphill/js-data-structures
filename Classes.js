// static methods or properties cannot be called on instances, just the class itself.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.driving = false;
    }

    static description = 'vehicle you can drive.';
    static logDescription() {
        console.log('vehicle you can drive.');
    }

    drive() {
        this.driving = true;
        console.log('Driving');
    }
    
    stop() {
        this.driving = false;
        console.log('Stopped')
    }
}

const littleOne = new Car('Ferrari', 'F355');

// subclass of car
class RaceCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model);
        this.topSpeed = topSpeed;
    }
    boost() {
        if (this.driving) console.log('Accelerating');
        else console.log('You need to be driving');
    }
}

const vette = new RaceCar('Chevy', 'Corvette', 200);
vette.drive();
vette.boost();
vette.stop();
vette.boost();
Car.logDescription();
RaceCar.logDescription()