const router = require('express').Router()

router.post('/person', async (req, res) => {

    const { concurso } = req.body

    if (!concurso) {

        res.status(422).json({ error: "O titulo é obrigatorio" })
    }

    const person = {
        concurso
    }

    try {
        //criando dados
        await Person.create(person)

        res.status(201).json({ message: 'Concurso inserisdo' })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router
