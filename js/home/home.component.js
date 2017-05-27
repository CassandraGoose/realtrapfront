angular
  .module("app")
  .controller('HomeController', HomeController)

function HomeController($http, $stateParams, $state, $timeout) {
  const vm = this
  vm.playSound = playSound
  vm.showButton = true

  vm.$onInit = function() {
    console.log("home component");
  }

  function playSound() {
    console.log("button");
    vm.showButton = false
    $http.get("http://127.0.0.1:4000/")
      .then(function() {
        $timeout(function(){
          vm.showButton = true
        }, 4000)
      })
  }
}
