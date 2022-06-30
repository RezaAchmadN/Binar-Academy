const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(car) {
    super(`${car.name} is already rented!!`);
  }

  get details() {
    return {
      car: {
        id: this.car.id,
        image: this.car.image,
        isCurrentlyRented: this.car.isCurrentlyRented,
        name: this.car.name,
        price: this.car.price,
        size: this.car.size
      }
    }
  }
}

module.exports = CarAlreadyRentedError;
