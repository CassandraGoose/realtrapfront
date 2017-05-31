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
    $http.get("https://itsatraps.localtunnel.me")
      .then(function() {
        console.log("getting the shit out of this");
        $timeout(function(){
          vm.showButton = true
        }, 2000)
      })
  }
}
