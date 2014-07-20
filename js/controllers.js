angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
    
  $scope.images = [
    { img: '../img/apple_baby.png', name:'Apple Baby', id: 1 },
    { img: '../img/Ellie-Instagram.jpg',name:'Ellie', id: 2 },
    { img: '../img/IMG_0002.JPG',name:'Happy to see you', id: 3 },
    { img: '../img/vessel.jpg',name:'How did I get here', id: 4 },
    { img: '../img/sipky.jpg',name:'My spikes', id: 5 }    
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
    console.log($stateParams.playlistId);
    $scope.id = $stateParams.playlistId;
    $scope.image = [
    { img: '../img/apple_baby.png', name:'Apple Baby', id: 1 },
    { img: '../img/Ellie-Instagram.jpg',name:'Ellie', id: 2 },
    { img: '../img/IMG_0002.JPG',name:'Happy to see you', id: 3 },
    { img: '../img/vessel.jpg',name:'How did I get here', id: 4 },
    { img: '../img/sipky.jpg',name:'My spikes', id: 5 }    
  ];
})
