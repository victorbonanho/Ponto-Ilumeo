const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('ilumeopontodatabase', 'victor', 'JWCFVSyG2CU83Fz0OLqPQFSsKRrFnR4f', {
    host: 'dpg-cgnl82d269v5rjf84g70-a.oregon-postgres.render.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

sequelize.authenticate()
.then(() => {
    console.log('Conexão realizada com sucesso')
}).catch((erro) => {
    console.log('Erro na conexão: ', erro)
})

module.exports = sequelize