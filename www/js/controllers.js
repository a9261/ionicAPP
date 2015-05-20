angular.module('starter.controllers', [])

.controller('safeQueryCtrl', function($scope,Safes,fav) {
   $scope.chats = Safes.all();

   //按下Cacel鈕時重新rebind所有資料
   $scope.rebind = function(){
    $scope.chats = Safes.all();
   }
    //加入我的最愛
    $scope.add = function(chat,event) {
    if(fav.add(chat)){
      console.log('成功');
    }else{
      console.log('失敗');
    }
    //TODO: User點完愛心後，要有個動畫讓User知道他有成功加入
    //簡單的動畫
    event.target.parentElement.style.className +="  invisible";
    event.target.parentElement.previousElementSibling.style.cssText =" ";
  }
   //假．搜尋功能 
  $scope.searchEntity={
    txt:''
  };
  $scope.search= function(){
      var txt =$scope.searchEntity.txt;
      if(txt.length>0){
          var result =Safes.search(txt)
          if(result.length>0){
             $scope.chats=result;
          }
      }
   }
})

.controller('unsafeQueryCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();

   //按下Cacel鈕時重新rebind所有資料
   $scope.rebind = function(){
    $scope.chats = Chats.all();
   }

  $scope.remove = function(chat) {
    Chats.remove(chat);
  }

  //假．搜尋功能 
  $scope.searchEntity={
    txt:''
  };
  $scope.search= function(){
      var txt =$scope.searchEntity.txt;
      if(txt.length>0){
          var result =Chats.search(txt)
          if(result.length>0){
             $scope.chats=result;
          }
      }
   }

})

.controller('safeDetailCtrl', function($scope, $stateParams, Safes) {
  $scope.chat = Safes.get($stateParams.chatId);
})

.controller('unsafeDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('noticeCtrl', function($scope, $ionicPopup, $timeout) {
  $scope.settings = {
    enableFriends: true
  };
  //confirm 視窗
  $scope.showConfirm = function(){
     var confirmPopup = $ionicPopup.confirm({
        title:'匿名通報',
        subTitle:'確定要送出?'
     });
     confirmPopup.then(function(res){
        if(res){ 
          console.log('You are sure');
        }
        else{ 
            console.log('You are not sure');
          }
     });
  }

})

.controller('FavCtrl', function($scope, fav) {
  $scope.chats = fav.all();
  $scope.rebind = function(){
    $scope.chats = fav.all();
  }
  $scope.remove = function(chat) {
    fav.remove(chat);
  }

  //假．搜尋功能 
  $scope.searchEntity={
    txt:''
  };
  $scope.search= function(){
      var txt =$scope.searchEntity.txt;
      if(txt.length>0){
          var result =fav.search(txt)
          if(result.length>0){
             $scope.chats=result;
          }
      }
   }


});
//2015.05.20 .$scope.chats 名稱有機會要換掉，現在不好辨別