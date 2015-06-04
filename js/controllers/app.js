var demoApp=angular.module('demoApp',['ngRoute']);
demoApp.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/airlines',{
templateUrl:"partials/airlines.html",
controller:"airlineListCtrl",
controllerAs:"airlines"})
.when('/flights',{
templateUrl:'partials/flights.html',
controller:"flightListCtrl",
controllerAs:"flights"})
.when('/home',{
	templateUrl:'partials/home.html',
	controller:"homeCtrl"
})
.otherwise({redirectTo:'/home'})
}]);

demoApp.controller('airlineListCtrl',function($scope){
	$scope.airlines=[{'name':'AA','carrid':'0017'},{'name':'AB','carrid':'0018'},{'name':'AC','carrid':'0018'},{'name':'AE','carrid':'0019'}];
	
});
demoApp.controller('homeCtrl',function($scope){
	$scope.title="home";
});
