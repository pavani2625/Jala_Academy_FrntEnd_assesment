var app = angular.module("domApp", []);

app.controller("DomController", function ($scope) {

    $scope.name = "";

    $scope.showMessage = false;

    $scope.hideMessage = false;

    $scope.disableButton = false;

});