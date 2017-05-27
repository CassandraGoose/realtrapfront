(function() {

  angular.module("app", ['ui.router'])
    .component('home', {
      templateUrl: '/js/home/home.html',
      controller: 'HomeController'
    })
}())
