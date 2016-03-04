'use strict';

angular.module('zooApp')
	.controller('FoodVendorDeleteController', function($scope, $uibModalInstance, entity, FoodVendor) {

        $scope.foodVendor = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            FoodVendor.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
