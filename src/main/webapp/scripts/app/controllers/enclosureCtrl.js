'use strict';

angular.module('zooApp')
    .controller('EnclosureController', function ($scope, $state, Enclosure) {

        $scope.enclosures = [];
        $scope.loadAll = function() {
            Enclosure.query(function(result) {
               $scope.enclosures = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.enclosure = {
                enclosure: null,
                numberOfAnimals: null,
                feedingTime: null,
                condition: null,
                id: null
            };
        };
    });
