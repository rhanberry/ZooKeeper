'use strict';

angular.module('zooApp')
    .controller('NavbarController', function ($scope, $location, $state) {

        $scope.$state = $state;
    });
