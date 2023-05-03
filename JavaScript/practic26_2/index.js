var app = angular.module('myapp', []);

    app.controller('myController', function($scope) {

  /////////////-----------------1--------------------/////////////////
      $scope.numbers = [1, 2, 3, 4, 5];

  /////////////-----------------2--------------------/////////////////
      $scope.numbers = [1, 2, 3, 4, 5];
  /////////////-----------------3--------------------/////////////////
      $scope.num = [1, 2, 3, 4, 5];
      $scope.reverse = function() {
      $scope.num = $scope.num.reverse();
      };
  /////////////-----------------4--------------------/////////////////
     $scope.numbers = [5, 3, 1, 4, 2];
     $scope.sort = function() {
     $scope.numbers = $scope.numbers.sort();
    };
  /////////////-----------------5--------------------/////////////////
    $scope.languages = ['html', 'css', 'js', 'php'];

    $scope.addPlusSign = function(index) {
    $scope.languages[index] = $scope.languages[index] + "+";
   };
  /////////////-----------------6--------------------/////////////////
   $scope.users = ['Микола', 'Василь', 'Петро'];
   $scope.newUsers = ['Аня', 'Валя', 'Маша'];

   $scope.hasMoreUsers = function() {
    return $scope.newUsers.length > 0;
  };

   $scope.addUser = function() {
    if ($scope.hasMoreUsers()) {
      $scope.users.push($scope.newUsers.shift());
    } else {
      $scope.users.sort();
    }
  };

 /////////////-----------------7--------------------/////////////////
 $scope.rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];



 /////////////-----------------8--------------------/////////////////
 $scope.workers = {
  Україна: ['Київ', 'Львів'],
  Польща: ['Варшава', 'Лодзь'],
  Великобританія: ['Лондон', 'Манчестер'],
};

});
