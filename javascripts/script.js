var app = angular.module('awesome-spatial', ['hc.marked'])
  .controller('page-content', ['$scope', '$http', function($scope, $http) {
    $http.get('https://raw.githubusercontent.com/RoboDonut/awesome-spatial/master/README.md')
      .then(function(result) {
        $scope.readme = result.data;
      });
  }]);
