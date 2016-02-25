var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController'
    })
    .when('/vash', {
      templateUrl: '/views/templates/vash.html',
      controller: 'VashController'
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
