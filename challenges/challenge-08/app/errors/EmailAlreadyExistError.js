const ApplicationError = require("./ApplicationError");

class EmailAlreadyExistError extends ApplicationError {
  constructor(email) {
    super(`${email} is already exist!!`);
    this.email = email
  }

  get details() {
    return { email: this.email }
  }
}

module.exports = EmailAlreadyExistError;
