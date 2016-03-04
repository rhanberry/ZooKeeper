'use strict';

angular.module('zooApp')
    .controller('FavoriteFoodController', function ($scope, $state, FavoriteFood) {

        $scope.favoriteFoods = [];
        $scope.loadAll = function() {
            FavoriteFood.query(function(result) {
               $scope.favoriteFoods = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.favoriteFood = {
                favoriteFood: null,
                category: null,
                id: null
            };
        };
    });
