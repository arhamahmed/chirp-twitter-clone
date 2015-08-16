var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

//used for routes that must be authenticated
function isAuthenticated(req, res, next) {

	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	//allow all get request methods	
	if (req.method === "GET") {
		return next();
	}

	if (req.isAuthenticated() {
		return next();
	})

	//user is not authenticated... redirect to login page
	return res.redirect('/#login');
}

//regisering authentication middleware
router.use('/posts', isAuthenticated);
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