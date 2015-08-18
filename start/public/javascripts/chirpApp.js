var app = angular.module('chirpApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http){

    $rootScope.authenticated = false;
    $rootScope.current_user = "";

    $rootScope.logout = function() {

      $http.get('/auth/signout');
      $rootScope.authenticated = false;
      $rootScope.current_user = "";
    };
});

//using the correct controller where necessary
app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});

app.factory('postService', function($resource) {
  
  return $resource('/api/posts/:id');
  //var factory = {};

  //gets all posts
  //factory.getAll = function() {
  //  return $http.get('/api/posts');
  //}
  //return factory;
});

app.controller('mainController', function($scope, postService) {

	$scope.posts = [];
	$scope.newPost = {created_by : '', text : '', created_at: ''};

  //creating a promise that, on success, gets all posts from factory
  postService.getAll().success(function(data) {
    $scope.posts = data;
  });

	$scope.post = function () {

		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by : '', text : '', created_at: ''};
	}

});

app.controller('authController', function($scope, $http, $rootScope, $location){
  	$scope.user = {username: '', password: ''};
  	$scope.error_message = '';

	$scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data) { //data is the user object in the mongo db
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
    });
	};

	$scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data) { //data is the user object in the mongo db
      $rootScope.authenticated = true;
      $rootScope.current_user = data.user.username;
      $location.path('/');
    });
	};
});