var app = angular.module("studentApp", []);


app.controller(
    "StudentController",
    function ($scope, $http) {

        $scope.students = [];


        $scope.loadStudents = function () {

            $http.get("/api/students")
                .then(function (response) {

                    $scope.students =
                        response.data;

                    console.log(
                        "Students:",
                        $scope.students
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Error loading students:",
                        error
                    );

                });

        };

    }
);
