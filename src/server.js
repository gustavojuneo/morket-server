const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const path = require('path')
const port = process.env.PORT || 3333

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


const market = require('./routes')

app.use(market)

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')))

app.listen(port, () => {
    console.log("O servidor foi inicializado na porta: " + port)
})