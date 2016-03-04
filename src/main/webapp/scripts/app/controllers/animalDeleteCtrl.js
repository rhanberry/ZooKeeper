'use strict';

angular.module('zooApp')
	.controller('AnimalDeleteController', function($scope, $uibModalInstance, entity, Animal) {

        $scope.animal = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Animal.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
