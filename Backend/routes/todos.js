const express = require("express");
const router = express.Router();

const { createTodo, deleteTodo, getTodo } = require("../controllers/todoControllers");

router.get("/getTodo", getTodo)
router.post("/createTodo", createTodo)
router.delete("/deleteTodo/:id", deleteTodo)

module.exports = router;