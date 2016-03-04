'use strict';

angular.module('zooApp')
    .controller('FoodVendorController', function ($scope, $state, FoodVendor) {

        $scope.foodVendors = [];
        $scope.loadAll = function() {
            FoodVendor.query(function(result) {
               $scope.foodVendors = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.foodVendor = {
                foodVendor: null,
                id: null
            };
        };
    });
