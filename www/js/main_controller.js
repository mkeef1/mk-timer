(function(){
  'use strict';

  angular.module('mk-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.time = '';
    var timer;

    function countdown(){
      $scope.time -= 1;

      if($scope.time <= 0){
        $interval.cancel(timer);
      }
    }

    $scope.start = function(time){
      time = parseFloat($scope.time);
      timer = $interval(countdown, 1000);
      console.log('$scope.time', $scope.time);
      };
  }]);
})();
