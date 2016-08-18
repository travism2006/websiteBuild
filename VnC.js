'use strict';

angular.module('mibsApp', ['mibsApp.controllers', 'ngRoute']);

angular.module('mibsApp').config(function($routeProvider, $locationProvider)
    {
    $routeProvider.when('/view1', 
                        {
        controller:'GridViewCntrlr',
        templateUrl:'parts/view1.html'
    }).when('/view2', 
                        {
        controller:'ListViewCntrlr',
        templateUrl:'parts/view2.html'
    }).otherwise({redirectTo:'parts/view1.html'});
    $locationProvider.html5Mode(true);
});

angular.module('mibsApp').controller('GridViewCntrlr', function($scope)
                                     {
                               });
angular.module('mibsApp').controller('ListViewCntrlr', function($scope)
                                     {});