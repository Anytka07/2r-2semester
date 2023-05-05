var app = angular.module('myapp', []);

    app.controller('myController', function($scope) {

  /////////////-----------------1--------------------/////////////////
     $scope.num = 0;

  /////////////-----------------2--------------------/////////////////
  $scope.calculateSquare = function() {
    $scope.square = $scope.number * $scope.number;
  };
  /////////////-----------------3--------------------/////////////////
  $scope.countries = ['Україна', 'США', 'Німеччина'];

  $scope.addCountry = function() {
    if ($scope.newCountry) {
      $scope.countries.push($scope.newCountry);
      $scope.newCountry = '';
    }
  };
  /////////////-----------------4--------------------/////////////////
  $scope.isChecked = false;
  /////////////-----------------5--------------------/////////////////
  $scope.isChecked = false;
  /////////////-----------------6--------------------/////////////////
  $scope.$watch('checkbox1', function(newValue, oldValue) {
    $scope.checkbox2 = newValue;
  });
 /////////////-----------------7--------------------/////////////////
 $scope.courses = {
  'html': true,
  'css': true,
  'php': false,
  'js': true,
  'angular': false,
};

});
