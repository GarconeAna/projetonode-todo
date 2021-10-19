const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const Conn = require('./conn/conn');

const TodolistRoutes = require('./routes/todo.routes');

const app = express();
app.use(express.json());

app.use(cors());
Conn();

app.use('/todolist', TodolistRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`APP rodando em http://localhost:${port}/todolist`)
});