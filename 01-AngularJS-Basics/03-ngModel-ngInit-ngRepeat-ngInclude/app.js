var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {

    $scope.userName = "";

    $scope.students = [
        {
            name: "Razeena",
            course: "Java Full Stack",
            city: "Hyderabad"
        },
        {
            name: "Ayesha",
            course: "Frontend Development",
            city: "Hyderabad"
        },
        {
            name: "Rahul",
            course: "Python",
            city: "Bangalore"
        }
    ];

});