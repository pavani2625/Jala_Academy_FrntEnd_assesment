var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {

    $scope.student = {
        name: "MD Razeena Nishad",
        course: "Java Full Stack",
        city: "Hyderabad"
    };

});

app.directive("studentInfo", function () {

    return {

        restrict: "E",

        template:
            '<div class="student-card">' +
            '<h2>{{ student.name }}</h2>' +
            '<p><strong>Course:</strong> {{ student.course }}</p>' +
            '<p><strong>City:</strong> {{ student.city }}</p>' +
            '</div>'
    };

});