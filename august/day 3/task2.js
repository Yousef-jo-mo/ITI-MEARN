function Vehicle(speed, color) {
  this.speed = speed;
  this.color = color;
  this.turnLeft = function () {
    console.log("Turn Left");
  };
  this.turnRight = function () {
    console.log("Turn Right");
  };
  this.goBackward = function (speed, accel) {};
  this.goForward = function (speed, accel) {};
  this.start = function () {
    return true;
  };

  this.stop = function () {
    return false;
  };
}

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
  this.ringBell = function () {};
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  Vehicle.call(this, speed, color);
  this.getSizeOfEngine = function () {
    return sizeOfEngine;
  };
  this.getLicensePlate = function () {
    return licensePlate;
  };
}
MotorVehicle.prototype = Object.create(Vehicle);
MotorVehicle.prototype.constructor = MotorVehicle;

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  this.lowerLoad = function () {};
  this.raiseLoad = function () {};
}
DumpTruck.prototype = Object.create(MotorVehicle);
DumpTruck.prototype.constructor = DumpTruck;

function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  Weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  this.switchOnAirCon = function () {};
  this.getNumOfDorrs = function () {
    return numOfDoors;
  };
}
