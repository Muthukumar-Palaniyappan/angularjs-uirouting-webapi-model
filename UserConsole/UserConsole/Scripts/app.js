/// <reference path="Libraries/angular.min.js" />

var myModule;
(function () {
    debugger
    myModule = angular.module('myModule', ['ngRoute']);
    myModule.config(['$routeProvider',
        function ($routeProvider) {
        $routeProvider
          .when('/MyApps',
             {
                 templateUrl: 'Partials/MyApps.html',
                 controller: 'MyAppsController'
             })
            .when('/MyUpdates',
             {
                 templateUrl: 'Partials/MyUpdates.html',
                 controller: 'MyUpdatesController'
             })
         .otherwise({
             redirectTo: '/MyApps'
         });
    }]);
    myModule.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        //$httpProvider.defaults.withCredentials = true;
        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
    ]);
})();