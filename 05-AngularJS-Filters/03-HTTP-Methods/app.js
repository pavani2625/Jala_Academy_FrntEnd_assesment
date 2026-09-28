var app = angular.module("httpApp", []);

app.controller("HttpController", function ($scope, $http) {

    /*
     * GET Request
     */

    $scope.getData = function () {

        $scope.getMessage = "Sending GET request...";

        $http.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        )
        .then(function (response) {

            $scope.getMessage =
                "GET request successful.";

            // .status
            $scope.getStatus =
                response.status;

            // .config
            $scope.getConfig =
                response.config;

            // .data
            $scope.getDataResult =
                JSON.stringify(
                    response.data,
                    null,
                    2
                );

        })
        .catch(function (error) {

            $scope.getMessage =
                "GET request failed.";

            $scope.getStatus =
                error.status;

        });

    };


    /*
     * POST Request
     */

    $scope.postData = function () {

        $scope.postMessage = "Sending POST request...";

        var student = {

            name: "Razeena",

            course: "Java Full Stack",

            city: "Hyderabad"

        };


        $http.post(
            "https://jsonplaceholder.typicode.com/posts",
            student
        )
        .then(function (response) {

            $scope.postMessage =
                "POST request successful.";

            // .status
            $scope.postStatus =
                response.status;

            // .config
            $scope.postConfig =
                response.config;

            // .data
            $scope.postDataResult =
                JSON.stringify(
                    response.data,
                    null,
                    2
                );

        })
        .catch(function (error) {

            $scope.postMessage =
                "POST request failed.";

            $scope.postStatus =
                error.status;

        });

    };

});