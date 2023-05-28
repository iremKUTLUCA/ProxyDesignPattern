const Subject = require('./Subject');

class RealSubject extends Subject{
  constructor() {
    super();
    console.log("Creating real subject...");
  }

  process() {
    console.log("Processing complete.");
  }
}

module.exports = RealSubject;