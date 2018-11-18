const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Usar promise do próprio node. No worning.
module.exports = mongoose.connect('mongodb://localhost/todo')