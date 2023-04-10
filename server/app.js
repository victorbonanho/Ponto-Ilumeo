const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const port = 8081

const { PontosRoutes } = require('./routes/index')

PontosRoutes(app)

app.listen(port, () => {
    console.log('Servidor iniciado na porta', port)
})