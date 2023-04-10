const express = require('express')
const app = express()
const cors = require('cors')

const Pontos = require('../models/Pontos')

app.use(express.json())
app.use(cors())

const PontosRoutes = (app) => {

    app.get('/pontos/:id', async (req, res) => {
        await Pontos.findAll({
           where: {
            code: req.params.id
           }
        }).then((pontos) => {
            return res.json({
                error: false,
                pontos
            })
        }).catch((error) => {
            return res.status(400).json({
                error: true,
                mensagem: error
            })
        })
    })



    app.post('/pontos-create/', async (req, res) => {
        
        console.log(req.body)
        
        await Pontos.create(req.body)
                
        .then(() => {
            return res.json({
                error: false,
                mensagem: 'Ponto cadastrado'
            })
        }).catch((error) => {
            return res.status(400).json({
                error: true,
                mensagem: error
            })
        })
    })

}

module.exports = PontosRoutes

