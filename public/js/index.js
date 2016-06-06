var app = angular.module('myApp', []);

// alternate - https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination
// alternate - http://fdietz.github.io/recipes-with-angular-js/common-user-interface-patterns/paginating-through-client-side-data.html

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

  $http.get('/api/jobs').then(function(response) {
    response.data.forEach(function(entry) {
      $scope.data.push(entry);
    });
  });

  for (var i = 0; i < 65; i++) {}
}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
