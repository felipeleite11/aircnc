require('dotenv').config()
const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const { resolve } = require('path')

const app = express()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')))

const port = 3333
app.listen(port, () => console.log(`http://localhost:${port}`))