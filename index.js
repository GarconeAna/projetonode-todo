const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const Conn = require('./conn/conn');

const FilmesRoutes = require('./routes/filmes.routes');

const app = express();
app.use(express.json());

app.use(cors());
Conn();

app.use('/filmes', FilmesRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`APP rodando em http://localhost:${port}/filmes`)
});