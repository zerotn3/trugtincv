/**
 * Express Framwork
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const env = process.env.NODE_ENV || "development"
const router = require('./routes/routes')
const chalk = require('chalk');
const app = express()


app.set('port', process.env.PORT || 9000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 315360000 }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

/**
 * Start Express Server
 */
app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'))
});


module.exports = app;