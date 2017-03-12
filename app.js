/**
 * Express Framwork
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const router = require('./routes/routes')

const app = express()
const port = 9000



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 315360000 }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
