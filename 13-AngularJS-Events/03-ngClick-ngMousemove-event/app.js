var app = angular.module("eventApp", []);

app.controller("EventController", function ($scope) {

    $scope.clickCount = 0;

    $scope.mouseX = 0;

    $scope.mouseY = 0;

    $scope.eventType = "";


    // ng-click
    $scope.increaseCount = function () {

        $scope.clickCount++;

    };


    // ng-mousemove + $event
    $scope.mouseMove = function (event) {

        $scope.mouseX = event.clientX;

        $scope.mouseY = event.clientY;

    };


    // $event
    $scope.showEvent = function (event) {

        $scope.eventType = event.type;

        console.log("Event:", event);

    };

});