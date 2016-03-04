'use strict';

angular.module('zooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('favoriteFood', {
                parent: 'entity',
                url: '/favoriteFoods',
                data: {
                    pageTitle: 'FavoriteFoods'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/views/favoriteFoods.html',
                        controller: 'FavoriteFoodController'
                    }
                },
                resolve: {
                }
            })
            .state('favoriteFood.new', {
                parent: 'favoriteFood',
                url: '/new',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/favoriteFoodEdit.html',
                        controller: 'FavoriteFoodDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    favoriteFood: null,
                                    category: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('favoriteFood', null, { reload: true });
                    }, function() {
                        $state.go('favoriteFood');
                    })
                }]
            })
            .state('favoriteFood.edit', {
                parent: 'favoriteFood',
                url: '/{id}/edit',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/favoriteFoodEdit.html',
                        controller: 'FavoriteFoodDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['FavoriteFood', function(FavoriteFood) {
                                return FavoriteFood.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('favoriteFood', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('favoriteFood.delete', {
                parent: 'favoriteFood',
                url: '/{id}/delete',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/favoriteFoodDelete.html',
                        controller: 'FavoriteFoodDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['FavoriteFood', function(FavoriteFood) {
                                return FavoriteFood.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('favoriteFood', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
