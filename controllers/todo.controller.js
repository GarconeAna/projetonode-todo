const mongoose = require('mongoose');

const TodolistServices = require('./../services/todo.service');

const todolistService = new TodolistServices();

class TodolistController {
  getTodolist = async (req, res) => {
    const todolist = await todolistService.findAll();
    res.status(200).send(todolist);
  }

  getTodolistById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send('Id Inválido');
      return;
    }

    const todo = await todolistService.findById(id);

    if(!todo) {
      res.status(404).send('tarefa não encontrada');
      return;
    }

    res.status(200).send(todo);
  }

  createTodo = async (req, res) => {
    const todo = req.body;
    const todoSalva = await todolistService.createTodo(todo);
    res.status(201).send({ message: `tarefa ${todoSalva.titulo} criada com sucesso` });
  }


  putTodo = async (req, res) => {
    const id = req.params.id;
    const todoNovo = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send('Id Inválido');
      return;
    }

    await todolistService.putTodo(id, todoNovo);

    res.status(200).send({message: 'Atualizada com sucesso'});
  }

  deleteTodo = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send('Id Inválido');
      return;
    }

    const todo = await todolistService.deleteTodo(id);
    
    if(!todo) {
      res.status(404).send('tarefa não encontrada');
      return;
    }

    res.status(200).send({message: 'Excluida com sucesso'});
  }


}

module.exports = TodolistController;