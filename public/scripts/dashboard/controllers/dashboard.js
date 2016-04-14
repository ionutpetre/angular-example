angular
    .module('demo.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $session, $mockData) {
    $scope.user = {};
    $scope.activities = [];
    $scope.isDashboardLoaded = false;
    getDashboardData();

    function getDashboardData() {
        $mockData.getUserById($session.getUserId())
            .then(function(user) {
                $scope.user = user;
                $mockData.getActivities()
                    .then(function(activities) {
                        $scope.activities = activities;
                        $scope.isDashboardLoaded = true;
                    });
            });
    }
}

DashboardController.$inject = ['$scope', '$session', '$mockData'];
