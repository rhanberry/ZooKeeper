'use strict';

angular.module('zooApp')
    .controller('AnimalController', function ($scope, $state, Animal) {

        $scope.animals = [];
        $scope.loadAll = function() {
            Animal.query(function(result) {
               $scope.animals = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.animal = {
                commonName: null,
                scientificName: null,
                information: null,
                id: null
            };
        };


    });
