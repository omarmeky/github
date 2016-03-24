(function() {
  'use strict';
  angular.module('github')
    .factory('GithubService', ['$http', function($http) {
      return {
        search: function(searchTerm) {
          return $http.get('/api/search/repositories?q=' + searchTerm);
        },
        getRepoDetails: function(full_name) {
          return $http.get('/api/repos/' + full_name);
        },
        getRepoCommits: function(full_name) {
          return $http.get('/api/repos/' + full_name + '/commits');
        }
      }
    }]);
})();
