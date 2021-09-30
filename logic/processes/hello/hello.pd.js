var express = require('express');
var router = express.Router();

router.route('/').get(
	function(req,res,next){
		res.json({message: "hello efpftempsensor", data : new Date()})
	}
)


module.exports = (app) => router; 