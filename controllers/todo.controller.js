const TodoModel = require("../model/todo.model");


exports.createTodo = async (req, res, next) => {
    try {
        const createdModel = await TodoModel.create(req.body);
        res.status(201).json(createdModel);
    } catch (error) {
        next(error);
    }
};

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await TodoModel.find({});
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}