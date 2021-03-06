var app = angular.module("app.BasicProfile", [
    'controllers.ImageCopper',
    'controllers.BasicProfile',
    'controllers.Header',
    'controllers.Right',
    'controllers.Friend',
    'controllers.Message',
    'ui.bootstrap'
]);
app.directive("chatBox", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: 'http://shadhiin.com/member/chat_tmpl_load'
    };
});
app.directive('fallbackSrc', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function () {
                angular.element(this).attr("src", iAttrs.fallbackSrc);
            });
        }
    }
    return fallbackSrc;
});
app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});