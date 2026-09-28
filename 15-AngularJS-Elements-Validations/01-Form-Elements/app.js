var app = angular.module("formApp", []);

app.controller("FormController", function ($scope) {

    $scope.student = {};

    $scope.submitted = false;


    $scope.showDetails = function () {

        $scope.submitted = true;

    };

});