const router = require('express').Router()
const req = require('express/lib/request')
const Person = require('../models/Person')

router.post('/', async (req, res) => {

    const { concurso, remu, vagas, isClosed } = req.body
    if (!concurso) {

        res.status(422).json({ error: "O titulo é obrigatorio" })
    }

    const person = {
        concurso,
        remu,
        vagas,
        isClosed
    }

    try {
        //criando dados
        await Person.create(person)

        res.status(201).json({ message: 'Concurso inserisdo' })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.get("/", async (req, res) => {
    try {
        //Volta todos os valores da database
        const peopple = await Person.find()
        
        if (!peopple) {
            res.send({ message: "Erro 404" })
            return
        }
        res.status(200).json(peopple)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


router.get("/:id", async (req, res) => {
    const id = req.params.id

    try {
        //criando dados


        const peopple = await Person.find({ _id: id })

        if (!peopple) {
            res.send({ msg: "O usuário não foi encontrado!" })
            return
        }
        res.status(200).json(peopple)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})
module.exports = router
