var App = angular.module('single-page-app', []);

App.controller('cfgController', function($scope, $http) {
  $http.get('common.json')
       .then(function(res){
          $scope.todos = res.data;
	  $scope.socialmedia = res.socialmedia_links;               
        });

});
