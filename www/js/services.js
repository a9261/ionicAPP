angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: '馬特影像咖啡',
    lastText: '將攝影棚與咖啡廳結合在一起的影像咖啡館。主人魯夫是專業攝影師，因此這裡處處是藝術，到處可以取景，建築風格有著閒適自在的峇里島風情',
    face: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/109-256.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  }, {
    id: 1,
    name: '東眼桶仔雞',
    lastText: 'Hey, it\'s me',
    face: 'https://cdn2.iconfinder.com/data/icons/maki/100/restaurant-256.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
  },{
    id: 2,
    name: '飲料店',
    lastText: 'I should buy a boat',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  }, {
    id: 3,
    name: '餐廳',
    lastText: 'Look at my mukluks!',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  }, {
    id: 4,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  },{
    id: 5,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  },{
    id: 6,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  },{
    id: 7,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  },{
    id: 8,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  },{
    id: 9,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
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
    },
    search:function(txt){
      var result=[];
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].name.indexOf(txt)>-1) {
          result.push(chats[i]);
        }
      }
      return result;
    }
  };
})

.factory('Safes',function(){

  var safes = [{
    id: 0,
     name: '馬特影像咖啡',
    lastText: '將攝影棚與咖啡廳結合在一起的影像咖啡館。主人魯夫是專業攝影師，因此這裡處處是藝術，到處可以取景，建築風格有著閒適自在的峇里島風情',
    face: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/109-256.png',
    address: '臺北市士林區菁山街131巷13號',
    latlng:'25.1450621,121.56681690000005',
    storeimg:'http://www.otop.tw/graph/103017.jpg'
  }, {
    id: 1,
   name: '東眼桶仔雞',
    lastText: '東眼橋桶仔雞雖然看起來不像正式的餐廳，可是來這吃飯卻好像回到家裡吃飯的感覺，大家蹲坐在三合院外一起大塊吃肉、大碗喝酒、唱歌，酒酣耳熱之際，老闆還一直從自家廚房端出好吃料理來，這麼愜意又自在的氣氛，如果沒有預訂，有時還享受不到呢！ ',
    face: 'https://cdn2.iconfinder.com/data/icons/maki/100/restaurant-256.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
  },{
    id: 2,
    name: '車輪鱘魚美食餐廳',
    lastText: 'I should buy a boat',
    face: 'https://cdn2.iconfinder.com/data/icons/maki/100/restaurant-256.png',
    address: '新北市三峽區有木里6鄰130-1號',
    latlng:'24.856774,121.43583269999999',
    storeimg:'http://www.otop.tw/graph/106873.JPG'
  }, {
    id: 3,
    name: '景音樂咖啡館',
    lastText: 'Look at my mukluks!',
    face: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/109-256.png',
    address: '臺北市士林區至善路三段71巷29號',
    latlng:'25.1183665,121.56921379999994',
    storeimg:'http://www.otop.tw/graph/106624.jpg'
  }, {
    id: 4,
    name: '達利餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/109-256.png',
    address: '臺南市白河區白河區忠孝街26號',
    latlng:'23.350983,120.4116153',
    storeimg:'http://www.otop.tw/graph/108074.jpg'
  },{
    id: 5,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
  },{
    id: 6,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
  },{
    id: 7,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
  },{
    id: 8,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/Sketchy_icons_by_ma/128/file-unknow.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
  },{
    id: 9,
    name: '餐廳',
    lastText: 'This is wicked good ice cream.',
    face: 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/256/shop.png',
    address: '新北市三峽區插角里東眼5號',
    latlng:'24.862838,121.40956200000005',
    storeimg:'http://www.otop.tw/graph/104650.jpg'
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
    },
    search:function(txt){
      var result=[];

      for (var i = 0; i < safes.length; i++) {
        if (safes[i].name.indexOf(txt)>-1) {
          result.push(safes[i]);
        }
      }
      console.log(result.length);
      return result;
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

    },
    search:function(txt){
      var result=[];
      for (var i = 0; i < favs.length; i++) {
        if (favs[i].name.indexOf(txt)>-1) {
          result.push(favs[i]);
        }
      }
      return result;
    }
  };

})

.factory('notice',function(){
  
  var favs = [];

  return {
    send: function() {
      console.log("i send");
      return favs;
    },
    remove: function(safe) {
      favs.splice(favs.indexOf(safe), 1);
    }
  };

});

