const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    type: String,
    title: String,
    desc: String,
    estado: String,
    vaga: String,
    escolaridade: String,
    numVagas: String,
    remu: Number,
    status: Boolean

})

module.exports = Person