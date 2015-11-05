angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  io.socket.on('connect', function(){
    console.log('connected to sails oki')
      io.socket.get('/mylocks/3', function(data,jwres){
        console.log(data)
        console.log(jwres)
        $scope.locks = data;
      })
      io.socket.on('lock',function(msg){
        console.log(msg)
      })
  })

})

.controller('ChatsCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {});
