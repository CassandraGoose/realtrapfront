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
    $http.get("http://10.6.65.133:4000/")
      .then(function() {
        $timeout(function(){
          vm.showButton = true
        }, 2000)
      })
  }
}
