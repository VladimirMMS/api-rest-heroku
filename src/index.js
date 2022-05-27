const express = require('express')
const sequelize = require('../src/db/database')
const router = require('./route/index')

const app = express()
app.use(express.json())
app.use(router)


app.get('/', (req, res) => {
    res.json({response: "the main route"})
})

app.listen(5000, () => {
//     sequelize
//     .sync({force:false})
//     .then((result) => {
//         return result
//     })
//     .catch((err) => {
//         console.log(err)
// })
    console.log('Server in port 5000')
})