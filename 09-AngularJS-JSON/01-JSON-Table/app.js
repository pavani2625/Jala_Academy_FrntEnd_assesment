var app = angular.module("jsonApp", []);

app.controller("JsonController", function ($scope, $http) {

    $scope.students = [];

    $scope.sortField = "id";

    $scope.searchText = "";


    // Receive data from JSON file
    $http.get("students.json")
        .then(function (response) {

            $scope.students = response.data;

        })
        .catch(function () {

            console.log("Unable to load JSON file.");

        });

});