const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    concurso: String,

})

module.exports = Person