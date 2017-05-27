(function() {
  'use strict';
  console.log('hellloo??????');
  angular
    .module("app")
    .config(config)

  function config($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      })

    $urlRouterProvider.otherwise('/');
  }

}());
