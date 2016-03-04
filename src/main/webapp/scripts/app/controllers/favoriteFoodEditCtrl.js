'use strict';

angular.module('zooApp').controller('FavoriteFoodDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'FavoriteFood', 'FoodVendor', 'Animal',
        function($scope, $stateParams, $uibModalInstance, entity, FavoriteFood, FoodVendor, Animal) {

        $scope.favoriteFood = entity;
        $scope.foodvendors = FoodVendor.query();
        $scope.animals = Animal.query();
        $scope.load = function(id) {
            FavoriteFood.get({id : id}, function(result) {
                $scope.favoriteFood = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('zooApp:favoriteFoodUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.favoriteFood.id != null) {
                FavoriteFood.update($scope.favoriteFood, onSaveSuccess, onSaveError);
            } else {
                FavoriteFood.save($scope.favoriteFood, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
