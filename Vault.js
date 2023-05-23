const Cryptr = require("cryptr");

const lock = (obj, password) => {
    const cryptr = new Cryptr(password);
    let newObj = {};
    for (let key in obj) {
        newObj[key] = cryptr.encrypt(obj[key]);
    }

    return new Proxy(newObj, {
        set(target, key, value) {
            return (target[key] = cryptr.encrypt(value));
        },
        get(target, key) {
            return target[key];
        }
    });
}

const unlock = (obj, password) => {
    const cryptr = new Cryptr(password);
    let newObj = {};
    for (let key in obj) {
        newObj[key] = cryptr.decrypt(obj[key]);
    }

    return new Proxy(newObj, {
        set() {
            throw new Error("Cannot set value");
        },
    });
}

module.exports = {lock, unlock};