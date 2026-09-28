var app = angular.module(
    "animationApp",
    ["ngAnimate"]
);

app.controller(
    "AnimationController",
    function ($scope) {

        $scope.showBox = false;

        $scope.hideBox = false;

    }
);