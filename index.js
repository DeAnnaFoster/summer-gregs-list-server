var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var port = 3000

var housesRouter = require('./routes/houses');
var jobsRouter = require('./routes/jobs');
var carsRouter = require('./routes/cars');

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api/houses', housesRouter);
server.use('/api/jobs', jobsRouter);
server.use('/api/cars', carsRouter);






server.listen(port, () => {

  console.log(`
    Starting up node,
    Available on:
    http://127.0.0.1:${port}
    Hit CTRL-C to stop the server`)

})