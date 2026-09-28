var app = angular.module("apiApp", []);

if (!angular.lowercase) {
    angular.lowercase = function (text) {
        return text.toLowerCase();
    };
}

if (!angular.uppercase) {
    angular.uppercase = function (text) {
        return text.toUpperCase();
    };
}


app.controller("ApiController", function ($scope) {

    $scope.text = "AngularJS API Example";

    $scope.lowerText =
        angular.lowercase($scope.text);

    $scope.upperText =
        angular.uppercase($scope.text);

});