(function() {
  'use strict';
  angular.module('github')
    .controller('RepoCommitsController', ['$scope', '$state', '$stateParams', 'GithubService', function($scope, $state, $stateParams, GithubService) {
      $scope.full_name = $stateParams.full_name;
      if (!$scope.full_name) {
        $state.go('search');
      }
      GithubService.getRepoCommits($scope.full_name).then(function(response) {
        $scope.commits = response.data;
      }, function(error) {
        $scope.error = true;
      });
    }]);
})();
