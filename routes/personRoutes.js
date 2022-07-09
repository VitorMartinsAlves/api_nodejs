const router = require('express').Router()
const { route } = require('express/lib/application')
const req = require('express/lib/request')
const Person = require('../models/Person')

router.post('/', async (req, res) => {

    const { type,
        title,
        desc,
        estado,
        vaga,
        escolaridade,
        numVagas,
        remu,
        status } = req.body
    // if (title === undefined || title === null) {

    //     res.status(422).json({ error: "O titulo é obrigatorio" })
    // }

    const person = {
        type,
        title,
        desc,
        estado,
        vaga,
        escolaridade,
        numVagas,
        remu,
        status
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

// Mostra somente o ID selecionado 
router.get("/:id", async (req, res) => {
    const id = req.params.id

    try {
        //criando dados


        const peopple = await Person.find({ _id: id })
        console.log("dont found")
        if (!peopple) {
            res.send({ msg: "O usuário não foi encontrado!" })
            return
        }
        res.status(200).json(peopple)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Atualiza somente o ID selecionado 
router.patch("/:id", async (req, res) => {
    const id = req.params.id

    const { title,
        desc,
        estado,
        vaga,
        escolaridade,
        numVagas,
        remu,
        status } = req.body

    const person = {
        title,
        desc,
        estado,
        vaga,
        escolaridade,
        numVagas,
        remu,
        status
    }


    try {
        const updatePerson = await Person.updateOne({ _id: id }, person)

        if (updatePerson === 0) {
            res.send({ message: "Usuário não encontrado!" })
        }

        res.status(200).json(person)
    } catch {
        res.status(500).json({ error: error })

    }
})
// Delete o curso pelo ID 
router.delete("/:id", async (req, res) => {

    const id = req.params.id
    const peopple = await Person.find({ _id: id })

    if (!peopple) {
        res.send({ msg: "O usuário não foi encontrado!" })
        return
    }

    try {
        await Person.deleteOne({ _id: id })
        // res.send(200).json({ message: "Usuário deletado" })
    } catch (error){
        res.status(500).json({ error: error })

    }
})

module.exports = router
