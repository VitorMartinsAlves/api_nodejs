const bodyParser = require('body-parser')
const express = require('express')
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const dbname = "vunesp"
const collname = "concursos"
const morgan = require('morgan')
const cors = require('cors')
const app = express()
var router = express.Router();
// fez funcionar  e para o estado
router.get('/',function(req,res,next){
    res.status(200).send("hi, it Works")
});

const DB_USER = 'vitor'
const DB_PASSWORD = encodeURIComponent('071099')
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.zds8i.mongodb.net/vunesp?retryWrites=true&w=majority`;
require('dotenv').config

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

const PersonRoutes = require('./routes/personRoutes')
app.use('/person', PersonRoutes)


// rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({ message: 'Expressando minha arte' })
})


mongoose
    .connect(uri)
    .then(() => {
        console.log('Conetado')
        app.listen(process.env.PORT || 3000)
        console.log(process.env.PORT)
    })
    .catch((err) => console.log(err))




    