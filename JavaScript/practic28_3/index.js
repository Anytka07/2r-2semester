var app = angular.module('myapp', []);

    app.controller('myController', function($scope) {

  /////////////-----------------1--------------------/////////////////
  $scope.countries = [
    "Ukraine",
    "USA",
    "Canada",
    "France",
    "Italy"
];

$scope.addCountry1 = function () {
    $scope.countries.push($scope.newCountry);
    $scope.newCountry = '';
    $scope.sortCountries();
}

$scope.deleteCountry1 = function () {
    $scope.countries.splice($scope.deleteCountryIndex - 1, 1);
    $scope.deleteCountryIndex = '';
    $scope.sortCountries();
}

$scope.sortCountries = function () {
    $scope.countries.sort();
}

  /////////////-----------------2--------------------/////////////////
  $scope.countries = ['Ukraine', 'Poland', 'Germany', 'USA', 'Canada'];

$scope.addCountry = function() {
  $scope.countries.push($scope.newCountry);
  $scope.newCountry = '';
  $scope.countries.sort();
};

$scope.deleteCountry = function() {
  var index = $scope.countries.indexOf($scope.searchCountry);
  if (index !== -1) {
    $scope.countries.splice(index, 1);
  }
};
  /////////////-----------------3--------------------/////////////////
  $scope.countries = ['Ukraine', 'USA', 'Poland', 'Germany', 'China'];
  $scope.filterCountries = false;
  /////////////-----------------4--------------------/////////////////
  $scope.checkboxes = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };

  $scope.updateCheckboxes = function() {
    var numbers = $scope.checkboxNumbers.split(',');
    for (var i = 0; i < numbers.length; i++) {
      var number = parseInt(numbers[i]);
      if (!isNaN(number) && $scope.checkboxes[number] !== undefined) {
        $scope.checkboxes[number] = true;
      }
    }
  };
  /////////////-----------------5--------------------/////////////////
  $scope.users = ['Mykola', 'Vasya', 'Petya'];
	$scope.newUsers = ['Ivan', 'Dima', 'Andriy'];

	$scope.moveUser = function() {
		if ($scope.newUsers.length > 0) {
			var newUser = $scope.newUsers.shift();
			$scope.users.push(newUser);
		}
	};
  /////////////-----------------6--------------------/////////////////
  $scope.numbers = [1, 2, 3, 4, 5];
  $scope.sum = $scope.numbers.reduce((a, b) => a + b, 0);

  $scope.addNumber = function() {
    if ($scope.newNumber) {
      $scope.numbers.push(parseInt($scope.newNumber));
      $scope.newNumber = '';
      $scope.sum = $scope.numbers.reduce((a, b) => a + b, 0);
    }
  }
 /////////////-----------------7--------------------/////////////////


});
