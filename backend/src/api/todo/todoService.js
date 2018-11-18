const Todo = require('./todo')
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //new para reto. reg. atualizado
//runvalidators para validar registros na atualização de dados.

module.exports = Todo