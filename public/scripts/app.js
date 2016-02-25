var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController'
    })
    .when('/seiya', {
      templateUrl: '/views/templates/seiya.html',
      controller: 'SeiyaController'
    })
    .when('/yusuke', {
      templateUrl: '/views/templates/yusuke.html',
      controller: 'YusukeController'
    })
    .when('/luffy', {
      templateUrl: '/views/templates/luffy.html',
      controller: 'LuffyController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
