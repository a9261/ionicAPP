angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: '無良餐廳',
    lastText: '我沒良心！沒良心！真的沒良心！',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }, {
    id: 1,
    name: '無良飲料店',
    lastText: 'Hey, it\'s me',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 2,
    name: '飲料店',
    lastText: 'I should buy a boat',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }, {
    id: 3,
    name: '餐廳',
    lastText: 'Look at my mukluks!',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }, {
    id: 4,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 5,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 6,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 7,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 8,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 9,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Safes',function(){

  var safes = [{
    id: 0,
    name: '有良心餐廳',
    lastText: '好吃！好喝！好玩',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }, {
    id: 1,
    name: '有良心飲料店',
    lastText: 'Hey, it\'s me',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 2,
    name: '飲料店',
    lastText: 'I should buy a boat',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }, {
    id: 3,
    name: '餐廳',
    lastText: 'Look at my mukluks!',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }, {
    id: 4,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 5,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 6,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 7,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 8,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  },{
    id: 9,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png'
  }];

  return {
    all: function() {
      return safes;
    },
    remove: function(chat) {
      safes.splice(safes.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < safes.length; i++) {
        if (safes[i].id === parseInt(chatId)) {
          return safes[i];
        }
      }
      return null;
    }
  };

})

.factory('fav',function(){
  
  var favs = [];

  return {
    all: function() {
      return favs;
    },
    remove: function(safe) {
      favs.splice(favs.indexOf(safe), 1);
    },
    add: function(safe) {
      if(favs.indexOf(safe)<=-1){
        favs.push(safe);
        return 1;
      }else{ return 0;}

    }
  };

});

