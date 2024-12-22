const ClientError = require('./ClientError.js');

class InputError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InputError';
  }
}

module.exports = { InputError };
