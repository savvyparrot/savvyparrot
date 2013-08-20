angular.module("app").config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

  # The home page
  $routeProvider.when '/',
    templateUrl: 'angular/canvas.html'
    controller: 'HomeCtrl'

  $routeProvider.when '/example',
    templateUrl: 'angular/canvas.html'
    controller: 'ExampleCtrl'

  $routeProvider.otherwise redirectTo: '/'

  $locationProvider.html5Mode(true)
])
