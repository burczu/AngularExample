(function () {
    'use strict';

    angular.module('AuthenticationModule').controller('loginController', ['$location', 'authService', loginController]);

    function loginController($location, authService) {
        var viewModel = this;

        viewModel.loginData = {
            username: "",
            password: ""
        };

        viewModel.message = "";

        viewModel.login = function () {
            authService.login(viewModel.loginData)
                .then(function (response) {
                    $location.path('/home');
                }, function (response) {
                    viewModel.message = response.error_description;
                });
        };
    }
}());

