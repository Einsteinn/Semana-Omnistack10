const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:123@testemongodb-2n5hv.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// get, post, put, delete
// Query params: req.query (Filtros, ordenação, paginação....)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)