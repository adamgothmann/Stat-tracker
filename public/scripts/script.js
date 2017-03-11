console.log('sourced');
$(document).ready(function(){
  console.log('jquery');

  $.ajax({
  type: "GET",
  url: 'https://www.mysportsfeeds.com/api/feed/pull/nhl/2016-2017-regular/cumulative_player_stats.json?playerstats=G,A,Pts,Sh',
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  },
  data: '{ "comment" }',
  success: function(){
    alert('Thanks for your comment!');
  }
});
});
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

  // $http({
  //   method: 'GET',
  //   url: 'https://www.mysportsfeeds.com/api/feed/pull/nhl/current/cumulative_player_stats.json?playerstats=Pts',
  //   headers: {
  //     "Authorization": "Basic" + btoa(username + ":" + password)
  //   }
  // }).then(function(response){
  //   alert('it worked');
  //   console.log(response);
  // });


}]);
