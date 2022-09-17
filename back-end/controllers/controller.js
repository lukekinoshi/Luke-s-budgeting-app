const express = require("express");
const budgets = express.Router();
const {
    getAllBudgets,
    getBudget,
    createBudget,
    deleteBudget,
    updateBudget
  } = require("../queries/budgets.js");
  const { checkName, validateUrl } = require("../validations/checkBudget.js")

  // budget.use("/:budgetId/reviews", reviewsController);
//   INDEX PAGE
  budgets.get('/', async (req , res) => {
    const allBudget = await getAllBudgets();

    if (allBudget[0]) {

        res.status(200).json({payload: allBudget, success: true});
      } else {
        res.status(500).json({ error: "server error!" });
      }
    
  })
// SHOW
 budgets.get("/:id", async (req, res) => {
    const { id } = req.params;
    const budget = await getBudget(id);
    if (budget) {
      res.json({payload: budget, success: true});
    } else {
      res.status(404).json({ payload: "not found", success:false, error: "Budget mot found" });
    }
  });
//   CREATE
budgets.post("/",  async (req, res) => {
     
    try {
      const budget = await createBudget(req.body);
      res.json({payload: budget, success: true})
    } catch (error) {
        res.status(404).json({ payload: "not found", success:false, error: "Budget not found" });
    }
  });
//   DELETE
budgets.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedBudget = await deleteBudget(id);
    
    if (deletedBudget.id) {
      res.status(200).json({payload: deletedBudget, success: true})
    } else {
      res.status(404).json({ payload: "not found", success:false, error: "budget mot found" });
    }
  });

//   UPDATE

budgets.put("/:id", async (req, res) => {
    const { id } = req.params;
  
    const updatedBudget = await updateBudget(req.body, id);
    if (updatedBudget.id) {
      res.json(updatedBudget);
    } else {
      res.status(404).json({ payload: "not found", success:false, error: "Budget mot found" });
    }
  })

  module.exports = budgets;
