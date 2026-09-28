var app = angular.module("filterApp", []);

app.controller("FilterController", function ($scope) {

    $scope.name = "Razeena Nishad";

    $scope.salary = 45000.567;

    $scope.today = new Date();

});

app.filter("reverse", function () {

    return function (input) {

        if (!input) {
            return "";
        }

        return input.split("").reverse().join("");
    };

});