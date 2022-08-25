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
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos);
    } catch (error) {
        next(error);
    }
};

exports.getTodoById = async (req, res, next) => {
    try {
        const todoModel = await TodoModel.findById(req.params.todoId);
        if (todoModel) {
            res.status(200).json(todoModel);
        } else {
            res.status(404).send();
        }

    } catch (error) {
        next(error);
    }

};

exports.updateTodo = async (req, res, next) => {
    
};