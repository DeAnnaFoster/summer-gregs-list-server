var express = require('express');
var router = express.Router();


var cars = [{
  description: 'Lifted 4x4',
  make: 'Chevy',
  model: 'K5',
  price: 1500,
  img: '//placehold.it/200x200'
}]

function Car(description, make, model, price, img) {
  this.description = description
  this.make = make
  this.model = model
  this.price = price
  this.img = img
}

function addCar(description, make, model, price, img) {
  var car = new Car(description, make, model, price, img)
  cars.push(car)
}


router.get('/', function (req, res) {
  res.send(cars)
})

router.post('/', function (req, res) {
  var car = req.body
  addCar(car.description, car.make, car.model, car.price, car.img)
  res.send(cars)
})






module.exports = router;