const express = require('express')
const { Client } = require('pg')
const app = express()
app.use(express.json())

app.get('/medicos', async (req, res) => {
    try {
        const client = new Client({
            host: "localhost",
            user: "alunos",
            password: "alunos",
            database: "hospital",
            port: 5432
        })
        await client.connect()
        results = await client.query('select * from hospital.tb_medico')
        console.log(results)
        await client.end()
        res.status(200).send(results.rows)
    } catch (error) {
        console.log(error)
    }
})

app.get('/pacientes', async (req, res) => {
    try {
        const client = new Client({
            host: "localhost",
            user: "alunos",
            password: "alunos",
            database: "hospital",
            port: 5432
        })
        await client.connect()
        results = await client.query('select * from hospital.tb_paciente')
        console.log(results)
        await client.end()
        res.status(200).send(results.rows)
    } catch (error) {
        console.log(error)
    }
})

const porta = 3000
app.listen(porta, () => 
    console.log(`Executando. Porta ${porta}`)
)