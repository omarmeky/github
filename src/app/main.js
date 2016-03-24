(function() {
  'use strict';
  angular.module('github', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('search', {
          url: '/search',
          templateUrl: 'search/search.html',
          controller: 'SearchController'
        })
        .state('repo', {
          url: '/repo/:full_name',
          templateUrl: 'repo/repo.html',
          controller: 'RepoController'
        })
        .state('repo.commits', {
          url: '/commits',
          templateUrl: 'repo.commits/repo.commits.html',
          controller: 'RepoCommitsController'
        });
        $urlRouterProvider.when('/','/search');
    }]);
})();
