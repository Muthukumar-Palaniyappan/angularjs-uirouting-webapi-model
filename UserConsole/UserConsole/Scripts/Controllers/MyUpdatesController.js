/// <reference path="../app.js" />

(function () {
    var MyUpdatesController = function ($scope) {
        $scope.note = "It's Mandatory that atleast one field is completed.";
    };
    myModule.controller('MyUpdatesController', ['$scope', MyUpdatesController]);

})();