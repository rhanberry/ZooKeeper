'use strict';

angular.module('zooApp')
	.controller('EnclosureDeleteController', function($scope, $uibModalInstance, entity, Enclosure) {

        $scope.enclosure = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Enclosure.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
