angular
    .module('demo.login')
    .controller('LoginController', LoginController);

function LoginController($scope, $state, $session, $mockData) {
    $scope.login = login;

    function login() {
        $mockData.authUser($scope.username, $scope.password)
            .then(function(user) {
                $session.setUserId(user.id);
                $state.go('dashboard');
            });
    }
}

LoginController.$inject = ['$scope', '$state', '$session', '$mockData'];
