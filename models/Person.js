const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    concurso: String,
    vagas: Number,
    remu: Number,
    isClosed: Boolean

})

module.exports = Person