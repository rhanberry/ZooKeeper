'use strict';

angular.module('zooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('foodVendor', {
                parent: 'entity',
                url: '/foodVendors',
                data: {
                    pageTitle: 'FoodVendors'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/views/foodVendors.html',
                        controller: 'FoodVendorController'
                    }
                },
                resolve: {
                }
            })
            .state('foodVendor.new', {
                parent: 'foodVendor',
                url: '/new',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/foodVendorEdit.html',
                        controller: 'FoodVendorDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    foodVendor: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('foodVendor', null, { reload: true });
                    }, function() {
                        $state.go('foodVendor');
                    })
                }]
            })
            .state('foodVendor.edit', {
                parent: 'foodVendor',
                url: '/{id}/edit',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/foodVendorEdit.html',
                        controller: 'FoodVendorDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['FoodVendor', function(FoodVendor) {
                                return FoodVendor.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('foodVendor', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('foodVendor.delete', {
                parent: 'foodVendor',
                url: '/{id}/delete',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/foodVendorDelete.html',
                        controller: 'FoodVendorDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['FoodVendor', function(FoodVendor) {
                                return FoodVendor.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('foodVendor', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
