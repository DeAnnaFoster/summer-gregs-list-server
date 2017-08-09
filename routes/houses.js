var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



var houseSchema = new mongoose.Schema({
	description: { type: String, required: true },
	sqft: { type: Number, required: true },
	price: { type: Number, required: true },
	img: { type: String }
})


var Houses = mongoose.model('House', houseSchema)


router.get('/', function (req, res, next) {
	Houses.find({})
		.then((houses) => {
			res.send(houses)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Houses.create(req.body) // PROMISE
		.then((house) => {
			res.send(house)
		})
		.catch(next)
})

// http://www.gregslist.com/api/house/1234
router.get('/:houseId', function (req, res, next) {

	// req.params.houseId = 1234
	let houseId = req.params.houseId;


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

module.exports = router








module.exports = router;