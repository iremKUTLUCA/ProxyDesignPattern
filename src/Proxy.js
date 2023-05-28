const RealSubject = require('./RealSubject');
const Subject = require('./Subject');

class Proxy extends Subject{
  constructor() {
    super();
    this.object = null;
  }

  process() {
    if (this.object === null) {
      this.object = new RealSubject();
    }
    this.object.process();
  }
}

module.exports = Proxy;