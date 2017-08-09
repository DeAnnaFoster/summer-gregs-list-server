var express = require('express');
var router = express.Router();


var jobs = [{
  description: 'Low Hours High Pay',
  location: 'Nampa',
  pay: 115000
}]


function Job(description, location, pay) {
  this.description = description
  this.location = location
  this.pay = pay
}

function addJob(description, location, pay) {
  var job = new Job(description, location, pay)
  jobs.push(job)
}


router.get('/', function (req, res) {
  res.send(jobs)
})

router.post('/', function (req, res) {
  var job = req.body
  addJob(job.description, job.location, job.pay, job.img)
  res.send(jobs)
})







module.exports = router;