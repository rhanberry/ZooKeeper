'use strict';

angular.module('zooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/views/main.html',
                        controller: 'MainController'
                    }
                },
                resolve: {
                    
                }
            });
    });
