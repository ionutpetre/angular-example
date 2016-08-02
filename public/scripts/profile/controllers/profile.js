angular
    .module('demo.profile')
    .controller('ProfileController', ProfileController);

function ProfileController($scope, $state, $mockData) {
    $scope.user = {};
    $scope.isProfileLoaded = false;
    getProfileData();

    function getProfileData() {
        $mockData.getUserById($state.params.id)
            .then(function(user) {
                $scope.user = user;
                $scope.isProfileLoaded = true;
            });
    }
}

ProfileController.$inject = ['$scope', '$state', '$mockData'];
