const express = require('express') // Asignacion de Framework
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));


module.exports = app;

