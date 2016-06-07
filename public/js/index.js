var app = angular.module('myApp', []);

app.controller('MyCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
  $scope.currentPage = 0;
  $scope.pageSize = 10;
  $scope.data = [];
  $scope.q = '';

  $scope.getData = function() {
    // needed for the pagination calc
    // https://docs.angularjs.org/api/ng/filter/filter
    return $filter('filter')($scope.data, $scope.q)
  }

  $scope.numberOfPages = function() {
    return Math.ceil($scope.getData().length / $scope.pageSize);
  }

  $scope.prevPage = function() {
    $scope.currentPage = $scope.currentPage - 1
  }

  $scope.nextPage = function() {
    $scope.currentPage = $scope.currentPage + 1
  }

  var delay = Math.floor(Math.random() * (3000 - 1000) + 1000);
  setTimeout(function() {
    $http.get('/api/jobs').then(function(response) {
      response.data.forEach(function(entry) {
        $scope.data.push(entry);
      });
    });
  }, delay);

}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
