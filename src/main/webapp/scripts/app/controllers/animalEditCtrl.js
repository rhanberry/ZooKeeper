'use strict';

angular.module('zooApp').controller('AnimalDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Animal', 'FavoriteFood', 'Enclosure',
        function($scope, $stateParams, $uibModalInstance, entity, Animal, FavoriteFood, Enclosure) {

        $scope.animal = entity;
        $scope.favoritefoods = FavoriteFood.query();
        $scope.enclosures = Enclosure.query();
        $scope.load = function(id) {
            Animal.get({id : id}, function(result) {
                $scope.animal = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('zooApp:animalUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.animal.id != null) {
                Animal.update($scope.animal, onSaveSuccess, onSaveError);
            } else {
                Animal.save($scope.animal, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
