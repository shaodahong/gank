//主模块
(function (angular) {
    angular.module("app", [
        "ui.router",
        "web",
        "ios",
        "android",
        "navCurrentModule"
    ]).controller("appController", ["$scope", function ($scope) {

    }]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("web", {
                url: "/web",
                templateUrl: "./temp/web/web.html",
                controller: "webController"
            })
            .state("ios", {
                url: "/ios",
                templateUrl: "./temp/ios/ios.html",
                controller: "iosController"
            })
            .state("android", {
                url: "/android",
                templateUrl: "./temp/android/android.html",
                controller: "androidController"
            });
        $urlRouterProvider.otherwise("/web");
    }]);

})(angular);
