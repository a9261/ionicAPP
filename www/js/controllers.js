angular.module('starter.controllers', [])

.controller('safeQueryCtrl', function($scope,Safes,fav) {
   $scope.chats = Safes.all();

    $scope.add = function(chat,event) {
    if(fav.add(chat)){
      console.log('成功');
    }else{
      console.log('失敗');
    }
    //TODO: User點完愛心後，要有個動畫讓User知道他有成功加入
    event.target.parentElement.style.className +="  invisible";
    event.target.parentElement.previousElementSibling.style.cssText =" ";
  }
  $scope.searchEntity={txt:''};
  $scope.ksearch= function(t){
      console.log('Hi ' + t );
   }
})

.controller('unsafeQueryCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('safeDetailCtrl', function($scope, $stateParams, Safes) {
  $scope.chat = Safes.get($stateParams.chatId);
})

.controller('unsafeDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('noticeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

})

.controller('FavCtrl', function($scope, fav) {
  $scope.chats = fav.all();
  $scope.remove = function(chat) {
    fav.remove(chat);
  }
});