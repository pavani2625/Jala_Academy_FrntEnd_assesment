var app = angular.module("scopeApp", []);

app.run(function ($rootScope) {

    $rootScope.course = "Java Full Stack";

});

app.controller("FirstController", function ($scope) {

    $scope.name = "Razeena";

});

app.controller("SecondController", function ($scope) {

    $scope.name = "Nishad";

});