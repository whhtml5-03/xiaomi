angular.module('HomeModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'component/home/home.html',
		controller:'HomeCtrl',
		css:'component/home/home.css'
	})
}])
.service('homeData',['$http',function($http){
	this.get = function(){
		return $http.get('data/5.json');
	}
}])
.controller('HomeCtrl',['$scope','homeData',function($scope,homeData){
	homeData.get().success(function(res){
		$scope.arr = res.product;
		console.log(arr)
	})
}])