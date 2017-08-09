var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



var carSchema = new mongoose.Schema({
  description: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
	location: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String}
})


var Cars = mongoose.model('Car', carSchema)


router.get('/', function (req, res, next) {
	Cars.find({})
		.then((cars) => {
			res.send(cars)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Cars.create(req.body) // PROMISE
		.then((car) => {
			res.send(car)
		})
		.catch(next)
})


router.get('/:carId', function (req, res, next) {

	let carId = req.params.carId;

});


router.use(wizbang);

function wizbang(err, req, res, next) {

	if (req.xhr) {
		res.json({ success: false, error: err });
	}
	else {
		res.json({ success: false, error: err.message });
	}
}

module.exports = router;