const db = require("../db/dbConfig.js");
const getAllBudgets = async () => {
    try {
   
      const allBudget = await db.any("SELECT * FROM budgets");
      return allBudget;
    } catch (err) {
      return err;
    }
  };

  const getBudget = async (id) => {
    try {
      
      const oneBudget = await db.one("SELECT * FROM budgets WHERE id=$1", id);
      return oneBudget;
    } catch (error) {
    
      return error;
    }
  };
  const createBudget = async (budgets) => {
    const { item_name, date, ammount, item_from, category } = budgets;
    try {
      const newBudget = await db.one(
        "INSERT INTO budgets (item_name, date, ammount, item_from, category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [item_name, date, ammount, item_from, category]
      );
      return newBudget;
    } catch (error) {
      return error;
    }
  };
  const deleteBudget = async (id) => {
    try {
      const deletedBudget = await db.one("DELETE FROM budgets WHERE id = $1 RETURNING *", id);
      return deletedBudget;
    } catch (err) {
      return err;
    }
  };

  const updateBudget = async (budget, id) => {
    const { item_name,ammount, date, item_from, category  } = budget;
    try {
     
      const updatedBudget = await db.one("UPDATE budgets SET item_name = $1, ammount = $2, item_from = $3, date = $4, category = $5 WHERE id = $6 RETURNING *",
      
      [item_name, ammount, item_from ,date,category, id]);
      console.log(updateBudget)
      
      return updatedBudget;
    } catch (err) {
      return err;
    }
  }
  module.exports = { 
    getAllBudgets, 
    getBudget, 
    createBudget, 
    deleteBudget,
    updateBudget
  };