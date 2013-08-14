angular.module("app").config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

  # The home page
  $routeProvider.when '/',
    templateUrl: 'angular/home.html'
    controller: 'HomeCtrl'

  $routeProvider.when '/welcome',
    templateUrl: 'angular/welcome.html'
    controller: 'WelcomeCtrl'

  $routeProvider.when '/pepi',
    templateUrl: 'angular/pepi.html'
    controller: 'PepiCtrl'

  $routeProvider.otherwise redirectTo: '/'

  $locationProvider.html5Mode(true)
])
