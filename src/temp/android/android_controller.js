//android主模块
(function (angular) {
    angular.module("android", [
        "androidService"
    ]).controller("androidController", ["$scope", "androidFactory", function ($scope, androidFactory) {
        //上一页下一页开关显示
        $scope.loading = false;

        $scope.data = {};

        $scope.info = {
            page: 1
        };

        //上一页下一页
        $scope.goBack = function () {
            if($scope.info.page <= 1) {
                return false;
            }
            $scope.info.page--;
            $scope.getData();
        };
        $scope.goForward = function () {
            if($scope.info.page >= 27) {
                return false;
            }
            $scope.info.page++;
            $scope.getData();
        };

        $scope.getData = function () {
            androidFactory.getData($scope.info.page, function (data) {
                $scope.data =  data;
                $scope.loading = true;
            });
        };
        $scope.getData();

    }]).filter("formatTime", function () {
        return function (input) {
            //格式化时间
            return input.replace(/T/, " ").slice(0, input.replace(/T/, " ").indexOf("."));
        }
    });

})(angular);
