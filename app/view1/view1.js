'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
	 $scope.rows = 0;
	 $scope.columns = 0;
	 $scope.getRows = function(rows){
	 	return new Array(rows);
	 }; 
	 $scope.getColumns = function(columns){
	 	return new Array(columns);
	 }; 

	 // $scope.Neighbors = function(){
	 // 	 create the concept of the 8 neighbors?
	 // 	};

 	//  $scope.GameOfLife = function(Neighbors){
 	//  	using Neighbors create an if block around the 4 rules
 	//  }
}]);