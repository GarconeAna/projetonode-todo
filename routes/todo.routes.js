const express = require('express');
const TodolistController = require('./../controllers/todo.controller');

const router = express.Router();
const todolistController = new TodolistController();

router.get('/', todolistController.getTodolist);
router.get('/:id', todolistController.getTodolistById);
router.post('/', todolistController.createTodo);
router.put('/:id', todolistController.putTodo);
router.delete('/:id', todolistController.deleteTodo);

module.exports = router;