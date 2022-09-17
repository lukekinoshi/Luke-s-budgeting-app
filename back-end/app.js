const express = require('express');
const cors = require("cors");
const app = express();
// CONTROLLERS
const budgetController = require("./controllers/controller.js");
app.use(express.json());
app.use(cors());
app.use("/budgets", budgetController);
app.get('/', (req, res) => {
    res.send("Budgeting with Luke")
});
app.get("*", (req, res) => {
    res.status(404).send("page not found - this is from line 20 by the way")
})

module.exports = app;