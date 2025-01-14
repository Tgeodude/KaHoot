const express = require("express");
const ReactDOMServer = require("react-dom/server");


const apiRouter = express.Router();

apiRouter.get('/api/test', async (req, res) => {
    console.log("abobaabobaabobaabobaabobaabobaabobaabobaaboba")
    res.status(201).json(JSON.parse(JSON.stringify({gavno: "gavno"})))
})

module.exports = apiRouter;