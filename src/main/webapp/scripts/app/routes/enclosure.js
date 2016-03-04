'use strict';

angular.module('zooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('enclosure', {
                parent: 'entity',
                url: '/enclosures',
                data: {
                    pageTitle: 'Enclosures'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/views/enclosures.html',
                        controller: 'EnclosureController'
                    }
                },
                resolve: {
                }
            })
            .state('enclosure.new', {
                parent: 'enclosure',
                url: '/new',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/enclosureEdit.html',
                        controller: 'EnclosureDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    enclosure: null,
                                    numberOfAnimals: null,
                                    feedingTime: null,
                                    condition: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('enclosure', null, { reload: true });
                    }, function() {
                        $state.go('enclosure');
                    })
                }]
            })
            .state('enclosure.edit', {
                parent: 'enclosure',
                url: '/{id}/edit',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/enclosureEdit.html',
                        controller: 'EnclosureDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Enclosure', function(Enclosure) {
                                return Enclosure.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('enclosure', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('enclosure.delete', {
                parent: 'enclosure',
                url: '/{id}/delete',
                data: {
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/views/enclosureDelete.html',
                        controller: 'EnclosureDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Enclosure', function(Enclosure) {
                                return Enclosure.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('enclosure', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
