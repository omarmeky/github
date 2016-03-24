(function() {
  'use strict';
  angular.module('github')
    .controller('RepoController', ['$scope', '$state', '$stateParams', 'GithubService', function($scope, $state, $stateParams, GithubService) {
      $scope.full_name = $stateParams.full_name;
      if (!$scope.full_name) {
        $state.go('search');
      }
      GithubService.getRepoDetails($scope.full_name).then(function(response) {
        $scope.details = response.data;
      }, function(error) {
        $scope.error = true;
      });
    }]);
})();
