'use strict';

angular.module('zooApp')
    .factory('FavoriteFood', function ($resource) {
        return $resource('api/favoriteFoods/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
