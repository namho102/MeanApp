'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {

    $scope.movies = Movie.getList().$object;

    // $scope.movies = [
    //   {
    //     title: 'THE HATEFUL EIGHT',
    //     url: 'https://www.youtube.com/watch?v=gnRbXn4-Yis'
    //   },
    //   {
    //     title: 'This is a test',
    //     url: 'https://www.youtube.com/watch?v=gnRbXn4-Yis'
    //   }
    // ];

  });
