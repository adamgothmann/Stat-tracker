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
    url: 'https://www.mysportsfeeds.com/api/feed/pull/nhl/current/cumulative_player_stats.json?playerstats=Pts',
    headers: {
      "Authorization": "Basic" + btoa(username + ":" + password)
    }
  }).then(function(response){
    alert('it worked');
    console.log(response);
  });
}]);
