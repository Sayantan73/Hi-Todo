const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: { type: String, maxLength: 50, default: "untitled"},
    description: { type: String, required: true},
    createdAt: { type: Date, default: Date.now()}
});

module.exports = mongoose.model("Todo", todoSchema);