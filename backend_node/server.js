require('@babel/register');

const express = require("express");

const serverConfig = require("./ServerConfig");

const PORT = 3000;
const app = express();

serverConfig(app);

app.listen(PORT, () => {
    console.log("Server started");
})
