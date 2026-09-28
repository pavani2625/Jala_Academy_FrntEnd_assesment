var app = angular.module("validationApp", []);

app.controller(
    "ValidationController",
    function ($scope) {

        $scope.student = {};

        $scope.submitted = false;


        $scope.submitForm = function () {

            $scope.submitted = true;

            console.log(
                "Form submitted:",
                $scope.student
            );

        };

    }
);