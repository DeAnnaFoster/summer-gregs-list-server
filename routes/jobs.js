var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



var jobSchema = new mongoose.Schema({
	description: { type: String, required: true },
	location: { type: String, required: true },
	pay: { type: Number }
})


var Jobs = mongoose.model('Job', jobSchema)


router.get('/', function (req, res, next) {
	Jobs.find({})
		.then((jobs) => {
			res.send(jobs)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Jobs.create(req.body) // PROMISE
		.then((job) => {
			res.send(job)
		})
		.catch(next)
})


router.get('/:jobId', function (req, res, next) {

	let jobId = req.params.jobId;

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