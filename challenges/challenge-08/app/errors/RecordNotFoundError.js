const ApplicationError = require("./ApplicationError");

class RecordNotFoundError extends ApplicationError {
  constructor() {
    super(`Record not found!`)
  }
}

module.exports = RecordNotFoundError;
