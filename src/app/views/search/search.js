(function() {
  'use strict';
  angular.module('github')
    .controller('SearchController', ['$scope', 'GithubService', function($scope, GithubService) {
      $scope.search = function() {
        $scope.error = false;
        GithubService.search($scope.searchTerm).then(function(response) {
          $scope.results = response.data.items;
        }, function() {
          $scope.error = true;
        });
      };
    }]);
})();
