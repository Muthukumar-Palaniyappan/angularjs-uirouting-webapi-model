/// <reference path="../app.js" />

(function () {
    var MyAppsController = function ($scope, $http) {
        debugger;
        var saveSettings = function () {
            $http.post('http://localhost:56539/api/userconsole', $scope.appList).then(function () {
                alert($scope.note);
            });
        }
        $scope.note = 'Maximum of 15 Apps can be selected';
        
        //$scope.appList = getData();
        $http.get('http://localhost:56539/api/userconsole').then(function (response) {
            $scope.appList = response.data;
            $scope.appRange = getAppRange($scope.appList);
        });
        
        
        $scope.saveAppSettings = saveSettings;

        
    };
   
    myModule.controller('MyAppsController', ['$scope', '$http',MyAppsController]);

    function getData() {
        var appList = [
            {
                groupName: 'IT',
                apps: [{ Name: 'App1', canShow: false, order: 1 },
                    { Name: 'App2', canShow: true, order: 5 },
                { Name: 'App3', canShow: false, order: 3 }]
            },
            {
                groupName: 'Human Resources',
                apps: [{ Name: 'App4', canShow: true, order: 4 },
                    { Name: 'App5', canShow: false, order: 2 },
                { Name: 'App6', canShow: true, order: 6 }]
            }
        ];
        return appList;
    }
    function getAppRange(data)
    {
        var range = [];
        debugger;
        $.each(data, function (groupIndex, group)
        {
            $.each(group.apps, function (appIndex, app) {
                range.push(app.order);
            });
        });
        return range;
    }
   

})();