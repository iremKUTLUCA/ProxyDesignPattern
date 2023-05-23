const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

const Proxy = require("./src/Proxy");
const proxy = new Proxy();
proxy.process();
proxy.process();
proxy.process();
proxy.process();


app.get('/', (req, res) => {
    res.send("Hello World");
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);