var app = angular.module("selectApp", []);

app.controller("SelectController", function ($scope) {

    $scope.students = [

        {
            name: "Razeena",
            course: "Java Full Stack"
        },

        {
            name: "Ayesha",
            course: "Frontend"
        },

        {
            name: "Rahul",
            course: "Python"
        },

        {
            name: "Sana",
            course: "Data Science"
        }

    ];

});