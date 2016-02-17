var app = angular.module('QuickFood', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
   $stateProvider
   .state('home', {
      url: '/home'
   })
   .state('burgers', {
      url: '/burgers',
      templateUrl: '/burgers/burgers.html'
   })
   .state('chinese', {
      url: '/chinese',
      templateUrl: '/chinese/chinese.html'
   })
   .state('mediteranean', {
      url: '/mediteranean',
      templateUrl: '/mediteranean/mediteranean.html'
   })
   .state('pizza', {
      url: '/pizza',
      templateUrl: '/pizza/pizza.html'
   })
   .state('ramen', {
      url: '/ramen',
      templateUrl: '/ramen/ramen.html'
   })
   .state('sandwhiches', {
      url: '/sandwhiches',
      templateUrl: '/sandwhiches/sandwhiches.html'
   })
})
.controller('ctrl', function($scope){
   $scope.burger = {
      title: 'Burgers',
      img: './assets/burger.jpg'
   }
   $scope.chinese = {
     title: 'Chinese',
     img: './assets/chinese.jpg'
   }
   $scope.mediteranean = {
      title: 'Mediteranean',
      img: './assets/mediterranean.jpg'
   }
   $scope.pizza = {
      title: 'Pizza',
      img: './assets/pizza.jpg'
   }
   $scope.ramen = {
      title: 'Ramen',
      img: './assets/ramen.jpg'
   }
   $scope.sandwhiches = {
      title: 'Sandwhiches',
      img: './assets/sandwhiches.jpg'
   }
})
.controller('GoogleCtrl', function($scope, $http) {
   $scope.lat = 34.019431;
   $scope.long = -118.494357;
   $scope.burgerPlaces = [0,1,2,3,4];
   $http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + $scope.lat + "," + $scope.long + "&radius=1609.34&keyword=burgers&key=AIzaSyDY0mJs_icQ_6poJ7beU2F6GIp0AjGcYKI")
   .then(function(resp){
      console.log(resp.data);
         for(var i = 0; i < 5; i++) {
            $scope.burgerPlaces[i] = resp.data.results[i];
         }
      },
      function(resp){
         console.log("cannot retrieve data")
   });
});
