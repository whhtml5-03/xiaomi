angular.module('CategoryModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/category',{
		templateUrl:'component/category/category.html',
		controller:'CategoryCtrl',
		css:'component/category/category.css'
	})
}])
.controller('CategoryCtrl',['$scope',function($scope){
	$scope.name = 'nanfang';
}])