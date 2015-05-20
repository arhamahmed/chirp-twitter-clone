var express = require('express');
var router = express.Router();

router.route('/posts')

	//get all posts
	//TEMP SOLN
	.get(function (req, res){ //request obj from client and response obj from server

		res.send({message : 'TODO return all posts'});

	})

	//TEMP SOLN
	.post(function (req, res){
		res.send({message: 'TODO create a new post'});
	}); 

module.exports = router;