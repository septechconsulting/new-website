var myApp = angular.module('sepWebsite', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria']);

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('amber');
});

myApp.controller('sidenavController', function ($scope) {

})
