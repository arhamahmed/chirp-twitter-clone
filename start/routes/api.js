var express = require('express');
var router = express.Router();

//middleware
router.use(function (req, res, next) {

	if (req.method === "GET") {
		//continue to next middleware or request handler
		return next();
	}

	if (!req.isAuthenticated()) {
		//user not authenticated, redirect to login page
		return res.redirect('/#login');
	}

	//user authenticated continue to next middleware or handler
	return next();
});

router.route('/posts')

	//get all posts
	//TEMP SOLN
	.get(function (req, res){ //request obj from client and response obj from server

		res.send({message : 'TODO return all posts'});

	})

	//TEMP SOLN
	.post(function (req, res){
		res.send({message: 'TODO create a new post'});
	}) 

//id is a parameter
router.route('/posts/:id')

	
	//modifies a particular post
	.put(function (req, res) {

		res.send({message: 'TODO modify post with ID: ' + req.params.id});
	})

	//returns a particular post
	.get(function (req, res) {

		res.send({message: 'TODO return post with ID: ' + req.params.id});
	})

	//delete existing post
	.delete(function (req, res) {
		res.send({message: 'TODO delete post with ID: ' + req.params.id});
	});

module.exports = router;