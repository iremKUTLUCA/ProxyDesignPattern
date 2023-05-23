class Proxy {
    constructor() {
      this.object = null;
    }
  
    process() {
      if (this.object === null) {
        this.object = new RealSubject();
      }
      this.object.process();
    }
}