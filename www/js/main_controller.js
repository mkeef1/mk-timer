(function(){
  'use strict';

  angular.module('mk-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.input = '';
    var timer;

    function countdown(){
      $scope.time -= 1;

      if($scope.time <= 0){
        navigator.vibrate(3000);
        $interval.cancel(timer);
        alert('times up!!!');
        $scope.time = null;
      }
    }

    $scope.start = function(time){
      time = parseFloat($scope.input);
      $scope.time = time;
      $scope.input = '';
      timer = $interval(countdown, 1000);
      console.log('$scope.time', $scope.time);
      };
  }]);
})();
