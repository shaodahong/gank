(function (angular) {
    angular.module("webService", [])
        .factory("webFactory", ["$http", function ($http) {
            return {
                getData: function (page, fn) {
                    var url = "http://gank.io/api/data/前端/6/" + page;
                    $http.get(url).success(function(data,header,config,status){
                        //响应成功
                        fn(data);
                    }).error(function(data,header,config,status){
                        //处理响应失败
                        data = {
                            "error": "假数据",
                            "results": [
                                {
                                    "_id": "57cd731f421aa91105d65aab",
                                    "createdAt": "2016-09-05T21:29:03.409Z",
                                    "desc": "underscore 源码解读之 bind 方法的实现",
                                    "publishedAt": "2016-09-06T11:35:21.379Z",
                                    "source": "web",
                                    "type": "前端",
                                    "url": "https://github.com/hanzichi/underscore-analysis/issues/19",
                                    "used": true,
                                    "who": "子迟"
                                },
                                {
                                    "_id": "57ccb4e4421aa910f56bd8ad",
                                    "createdAt": "2016-09-05T07:57:24.436Z",
                                    "desc": "给予 Vue.js 2.0 开发的桌面 UI 元素框架",
                                    "publishedAt": "2016-09-05T11:32:16.999Z",
                                    "source": "chrome",
                                    "type": "前端",
                                    "url": "https://github.com/ElemeFE/element",
                                    "used": true,
                                    "who": "代码家"
                                },
                                {
                                    "_id": "57c3c7b1421aa9125d96f525",
                                    "createdAt": "2016-08-29T13:27:13.169Z",
                                    "desc": "根据图片色调生成渐进式背景图",
                                    "publishedAt": "2016-08-30T11:38:36.625Z",
                                    "source": "chrome",
                                    "type": "前端",
                                    "url": "http://benhowdle.im/grade/",
                                    "used": true,
                                    "who": "代码家"
                                },
                                {
                                    "_id": "57beae21421aa9125d96f507",
                                    "createdAt": "2016-08-25T16:36:49.889Z",
                                    "desc": "用canvas画熊本熊",
                                    "publishedAt": "2016-08-26T11:39:18.8Z",
                                    "source": "web",
                                    "type": "前端",
                                    "url": "http://blog.ilanyy.com/html5/draw-kumamon-by-canvas.html",
                                    "used": true,
                                    "who": "saymagic"
                                },
                                {
                                    "_id": "57b67283421aa93a804bea29",
                                    "createdAt": "2016-08-19T10:44:19.103Z",
                                    "desc": "一些实用 SVG 小 ICON，萌萌的",
                                    "publishedAt": "2016-08-19T11:26:30.163Z",
                                    "source": "chrome",
                                    "type": "前端",
                                    "url": "https://github.com/danklammer/bytesize-icons",
                                    "used": true,
                                    "who": "代码家"
                                }
                            ]
                        };
                        fn(data);
                    });
                }
            }
        }]);


})(angular);
