const Todo = require("../models/Todo");


exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const data = await Todo.create({title, description});
        res.status(200).json({success: true, message: "Todo created successfully", data: data})
    } catch (error) {
        res.status(500).json( {success: false, message: error.message})
    }

}

exports.getTodo = async (req, res) => {
    try {

        const data = await Todo.find({});
        res.status(200).json({success: true, message: "data fetched successfully", data: data})
    } catch (error) {
        res.status(500).json( {success: false, message: error.message})
    }

}

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Todo.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Todo deleted successfully", data: data})
    } catch (error) {
        res.status(500).json( {success: false, message: error.message})
    }

}