var app = angular.module('xiaomi',['ngRoute','angularCSS','HomeModule','CategoryModule'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.otherwise({redirectTo:'/home'})
}])