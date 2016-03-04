'use strict';

angular.module('zooApp', ['ngResource',  'ui.bootstrap', 'ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');
        $stateProvider.state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    templateUrl: 'scripts/app/views/navbar.html',
                    controller: 'NavbarController'
                }
            },
            resolve: {

            }
        });
        
    })
