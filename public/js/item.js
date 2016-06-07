var app = angular.module('myApp', []);

app.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.loading = 'loading...';
  var path = window.location.pathname;
  var delay = Math.floor(Math.random() * (5000 - 1000) + 1000);

  setTimeout(function() {
    $http.get('/api' + path).then(function(response) {
      $scope.item = response.data;
      $scope.loading = '';
    });
  }, delay);
}]);
