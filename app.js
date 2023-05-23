const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

const {lock, unlock} = require("./Vault");
const password = "1234567890";

const user = {
    name: "John Doe",
    age: 30,
    address: "123 Street",
    phone: "1234567890"
};

const lockedUser = lock(user, password);
//lockedUser.mail = "joe.doe@gmail.com";

const unlockedUser = unlock(lockedUser, password);

app.get('/lock', (req, res) => {
    res.send(JSON.stringify(lockedUser, null, 2));
    }
);

app.get('/unlock', (req, res) => {
    res.send(JSON.stringify(unlockedUser, null, 2));
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);