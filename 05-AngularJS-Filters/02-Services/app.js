var app = angular.module("serviceApp", []);


/* Custom Service */

app.service("MessageService", function () {

    this.getMessage = function () {

        return "Message from custom AngularJS service.";

    };

});


/* Controller */

app.controller(
    "ServiceController",
    function (
        $scope,
        $location,
        $timeout,
        $http,
        MessageService
    ) {

        /* $location */

        $scope.currentUrl =
            $location.absUrl();


        /* Custom Service */

        $scope.customMessage =
            MessageService.getMessage();


        /* $timeout */

        $scope.timeoutMessage =
            "Waiting for timeout...";

        $timeout(function () {

            $scope.timeoutMessage =
                "This message appeared after 2 seconds.";

        }, 2000);


        /* $http */

        $scope.loadData = function () {

            $scope.httpMessage =
                "Loading data...";

            $http.get(
                "https://jsonplaceholder.typicode.com/posts/1"
            )
            .then(function (response) {

                $scope.httpMessage =
                    "HTTP request successful. "
                    + "Post title: "
                    + response.data.title;

            })
            .catch(function () {

                $scope.httpMessage =
                    "Unable to load data.";

            });

        };

    }
);