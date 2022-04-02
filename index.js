const bodyParser = require('body-parser')
const express = require('express')
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const dbname = "vunesp"
const collname = "concursos"
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const DB_USER = 'vitor'
const DB_PASSWORD = encodeURIComponent('071099')
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.zds8i.mongodb.net/vunesp_fivem?retryWrites=true&w=majority`;

const Person = require('./models/Person')


app.use(express.urlencoded({ extended: true }))

app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({ message: 'Expressando minha arte' })
})

mongoose
    .connect(uri)
    .then(() => {
        console.log('Conetado')
        app.listen(3000)
    })
    .catch((err) => console.log(err))
