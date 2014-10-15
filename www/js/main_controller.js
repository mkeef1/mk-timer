(function(){
  'use strict';

  angular.module('mk-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.time = 100;
    var timer;

        function countdown(){
          $scope.time -= 1;

          if($scope.time <= 0){
            $interval.cancel(timer);
          }
        }

        $scope.start = function(){
          timer = $interval(countdown, 1000);
          console.log('$scope.time', $scope.time);
          console.log('$scope.display', $scope.display);
          console.log('$scope.timer', $scope.timer);
        };
  }]);
})();
