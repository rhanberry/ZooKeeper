'use strict';

angular.module('zooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('animal', {
                parent: 'entity',
                url: '/animals',
                data: {
                    pageTitle: 'Animals'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/views/animals.html',
                        controller: 'AnimalController'
                    }
                },
                resolve: {
                }
            })
            .state('animal.new', {
                parent: 'animal',
                url: '/new',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/animalEdit.html',
                        controller: 'AnimalDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    commonName: null,
                                    scientificName: null,
                                    information: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('animal', null, { reload: true });
                    }, function() {
                        $state.go('animal');
                    })
                }]
            })
            .state('animal.edit', {
                parent: 'animal',
                url: '/{id}/edit',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/animalEdit.html',
                        controller: 'AnimalDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Animal', function(Animal) {
                                return Animal.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('animal', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('animal.delete', {
                parent: 'animal',
                url: '/{id}/delete',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/animalDelete.html',
                        controller: 'AnimalDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Animal', function(Animal) {
                                return Animal.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('animal', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
