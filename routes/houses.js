var express = require('express');
var router = express.Router();

var houses = [{
  description: 'A Sweet House',
  sqft: '1500',
  price: 105000,
  img: '//placehold.it/200x200'
}]

function House(description, sqft, price, img) {
  this.description = description
  this.sqft = sqft
  this.price = price
  this.img = img
}

function addHouse(description, sqft, price, img) {
  var house = new House(description, sqft, price, img)
  houses.push(house)
}

router.get('/', function (req, res) {
  res.send(houses)
})

router.post('/', function (req, res) {
  var house = req.body
  addHouse(house.description, house.sqft, house.price, house.img)
  res.send(houses)
})














module.exports = router;