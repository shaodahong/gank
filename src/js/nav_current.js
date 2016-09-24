//导航切换效果
(function(angular) {

  angular.module('navCurrentModule', []).directive('navCurrent', ['$location', function($location) {
    return {
      link: function(scope, element, attributes) {
        console.log(attributes.navCurrent);

        scope.$location = $location;
        console.log($location.url())

        scope.$watch('$location.url()', function(now, old) {
          // /in_theaters

          var aLink = element.children().attr('href').substr(1);
          console.log(aLink);
          console.log(now);
          if (now.startsWith(aLink)) {
            // 干掉兄弟节点上active
            element.parent().children().removeClass(attributes.navCurrent);
            // 给当前元素加上active样式
            element.addClass(attributes.navCurrent);
          }
        });
      }
    };

  }]);

})(angular);
