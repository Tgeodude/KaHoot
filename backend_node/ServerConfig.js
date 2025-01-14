const express = require("express");
const morgan = require("morgan");
const apirouter = require("./routes/api.routes");

const cors = require("cors");

function serverConfig(app) {
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", apirouter);
}

module.exports = serverConfig;