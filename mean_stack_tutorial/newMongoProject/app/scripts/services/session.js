'use strict';

angular.module('newMongoProjectApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
