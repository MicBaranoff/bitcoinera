(function () {
    'use strict';

    var app = angular.module("app", ["ngMessages"]);

    app.config([
		"$compileProvider",
		"$httpProvider",
		function ($compileProvider, $httpProvider) {
		    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|skype):/);
		}
    ]);

}());