'use strict';

angular.module('zooApp').controller('FoodVendorDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'FoodVendor', 'FavoriteFood',
        function($scope, $stateParams, $uibModalInstance, entity, FoodVendor, FavoriteFood) {

        $scope.foodVendor = entity;
        $scope.favoritefoods = FavoriteFood.query();
        $scope.load = function(id) {
            FoodVendor.get({id : id}, function(result) {
                $scope.foodVendor = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('zooApp:foodVendorUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.foodVendor.id != null) {
                FoodVendor.update($scope.foodVendor, onSaveSuccess, onSaveError);
            } else {
                FoodVendor.save($scope.foodVendor, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
