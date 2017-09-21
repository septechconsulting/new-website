var myApp = angular.module('sepWebsite', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria']);

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('amber');
});

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/HTML Files/aboutUs.html',
            controller: 'aboutUs'
        })
        .when('/liveTv', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'liveTv.html',
            controller: 'filters'
        })
        .otherwise({
            redirectTo: '/'
        })
});

myApp.controller('navigationController', function ($scope, $window, $location, $rootScope) {
    $scope.pages = [
        {
            "Name": "Who We Are",
            "Path": "aboutUs"
        },
        {
            "Name": "Services",
            "Path": "services"
        },
        {
            "Name": "Success Stories",
            "Path": "successes"
        },
        {
            "Name": "Careers",
            "Path": "careers"
        },
        {
            "Name": "Contact Us",
            "Path": "contact"
        }
    ];

    $scope.pageAlert = function (thingToAlert) {
        $window.alert(thingToAlert);
    }

});

function Queue() {
    var a = [],
        b = 0;
    this.getLength = function () {
        return a.length - b
    };
    this.isEmpty = function () {
        return 0 == a.length
    };
    this.enqueue = function (b) {
        a.push(b)
    };
    this.dequeue = function () {
        if (0 != a.length) {
            var c = a[b];
            2 * ++b >= a.length && (a = a.slice(b), b = 0);
            return c
        }
    };
    this.peek = function () {
        return 0 < a.length ? a[b] : void 0
    }
};
