var app = angular.module(
    "routingApp",
    ["ngRoute"]
);


app.config(function ($routeProvider) {

    $routeProvider

        .when("/home", {
            template:
                "<h2>Home</h2>" +
                "<p>Welcome to the AngularJS Home page.</p>"
        })

        .when("/about", {
            template:
                "<h2>About</h2>" +
                "<p>This page demonstrates AngularJS routing.</p>"
        })

        .when("/contact", {
            template:
                "<h2>Contact</h2>" +
                "<p>Email: info@example.com</p>"
        })

        .otherwise({
            redirectTo: "/home"
        });

});