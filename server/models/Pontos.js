const Sequelize = require('sequelize')
const db = require('./db')

const Pontos = db.define('pontos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horaEntrada: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horaSaida: {
        type: Sequelize.STRING,
        allowNull: true
    },
    horaDia: {
        type: Sequelize.STRING,
        allowNull: true
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Verifica se a tabela existe
//Pontos.sync()

module.exports = Pontos