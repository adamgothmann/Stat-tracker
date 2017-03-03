console.log('sourced');
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  var username;
  var password;

  $http({
    method: 'GET',
    url: '/key'
  }).then(function(response){
    username = response.data.username;
    password = response.data.password;
  });

  $http({
    method: 'GET',
    
  })
}]);
