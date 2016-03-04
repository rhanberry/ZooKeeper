'use strict';

angular.module('zooApp').controller('EnclosureDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'Enclosure', 'Animal',
        function($scope, $stateParams, $uibModalInstance, $q, entity, Enclosure, Animal) {

        $scope.enclosure = entity;
        $scope.animals = Animal.query({filter: 'enclosure-is-null'});
        $q.all([$scope.enclosure.$promise, $scope.animals.$promise]).then(function() {
            if (!$scope.enclosure.animal || !$scope.enclosure.animal.id) {
                return $q.reject();
            }
            return Animal.get({id : $scope.enclosure.animal.id}).$promise;
        }).then(function(animal) {
            $scope.animals.push(animal);
        });
        $scope.load = function(id) {
            Enclosure.get({id : id}, function(result) {
                $scope.enclosure = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('zooApp:enclosureUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.enclosure.id != null) {
                Enclosure.update($scope.enclosure, onSaveSuccess, onSaveError);
            } else {
                Enclosure.save($scope.enclosure, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
