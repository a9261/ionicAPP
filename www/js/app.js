// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.safeQuery', {
    url: '/dash',
    views: {
      'tab-safeQuery': {
        templateUrl: 'templates/tab-safeQuery.html',
        controller: 'safeQueryCtrl'
      }
    }
  })

  .state('tab.unsafeQuery', {
      url: '/chats',
      views: {
        'tab-unsafeQuery': {
          templateUrl: 'templates/tab-unsafeQuery.html',
          controller: 'unsafeQueryCtrl'
        }
      }
    })

    .state('tab.safe-detail', {
        url: '/safe/:chatId',
        views: {
          'tab-safeQuery': {
            templateUrl: 'templates/query-detail.html',
            controller: 'safeDetailCtrl'
          }
        }
      })
    
    .state('tab.unsafe-detail', {
      url: '/unsafe/:chatId',
      views: {
        'tab-unsafeQuery': {
          templateUrl: 'templates/query-detail.html',
          controller: 'unsafeDetailCtrl'
        }
      }
    })

  .state('tab.notice', {
    url: '/account',
    views: {
      'tab-notice': {
        templateUrl: 'templates/tab-notice.html',
        controller: 'noticeCtrl'
      }
    }
  })

 .state('tab.fav', {
    url: '/fav',
    views: {
      'tab-fav': {
        templateUrl: 'templates/tab-fav.html',
        controller: 'FavCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
