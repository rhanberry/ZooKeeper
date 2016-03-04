'use strict';

angular.module('zooApp')
	.controller('FavoriteFoodDeleteController', function($scope, $uibModalInstance, entity, FavoriteFood) {

        $scope.favoriteFood = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            FavoriteFood.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
