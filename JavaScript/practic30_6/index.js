var app = angular.module('myapp', []);

    app.controller('myController', function($scope) {

  /////////////-----------------1--------------------/////////////////
  $scope.users = [
    { name: 'Anna Dous', email: 'anna@mail.com' },
    { name: 'Jane Smith', email: 'jane@mail.com' },
    { name: 'Kiki Vinston', email: 'kiki@mail.com' }
  ];

  /////////////-----------------2--------------------/////////////////
  $scope.users = [
    { name: 'Anna Dous', email: 'anna@mail.com' },
    { name: 'Jane Smith', email: 'jane@mail.com' },
    { name: 'Kiki Vinst', email: 'kiki@mail.com' }
  ];
  /////////////-----------------3--------------------/////////////////
  $scope.users2 = [
    { name: 'Anna Dous', email: 'anna@mail.com', dateOfBirth: '2000-01-12' },
    { name: 'Jane Smith', email: 'jane@mail.com', dateOfBirth: '1995-11-09' },
    {  name: 'Kiki Vinst', email: 'kiki@mail.com', dateOfBirth: '2013-08-10' }
  ];
  /////////////-----------------4--------------------/////////////////
  $scope.users3 = [
    { name: 'Anna Dous', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Kiki Vinst', age: 18 }
  ];
  /////////////-----------------5--------------------/////////////////
  $scope.users5 = [
    { name: 'Anna Dous', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Kiki Vinst', age: 18 }
  ];
  /////////////-----------------6--------------------/////////////////
  $scope.users6 = [
    { name: 'Anna Dous', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Kiki Vinst', age: 18 }
  ];
 /////////////----------------7--------------------/////////////////
 $scope.ascendingSort = true;
 $scope.sortBy = 'name';
 /////////////-----------------8-9-------------------/////////////////
 $scope.users8 = [
  { name: 'Anna Dous', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Kiki Vinst', age: 18 },
  { name: 'Sarah Williams', age: 28 },
  { name: 'David Brown', age: 35 },
  { name: 'Emily Davis', age: 27 }
];
 /////////////----------------10--------------------/////////////////
$scope.users10 = [
  { name: 'Anna Dous', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Kiki Vinst', age: 18 },
  { name: 'Sarah Williams', age: 28 },
  { name: 'David Brown', age: 35 },
  { name: 'Emily Davis', age: 27 }
];

$scope.numUsers = 3; // Значення за замовчуванням для кількості користувачів
$scope.startIndex = 0; // Значення за замовчуванням для початкового індексу

 /////////////----------------11--------------------/////////////////

$scope.users11 = [
  { name: 'Anna Dous', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Kiki Vinst', age: 18 },
  { name: 'Sarah Williams', age: 28 },
  { name: 'David Brown', age: 35 },
  { name: 'Emily Duvis', age: 27 }
];

$scope.hasLetterA = function(user) {
  return user.name.toLowerCase().includes('a');
};

 /////////////----------------12--------------------/////////////////
 $scope.users12 = [
  { name: 'Anna Dous', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Kiki Vinst', age: 18 },
  { name: 'Sarah Williams', age: 28 },
  { name: 'David Brown', age: 35 },
  { name: 'Emily Duvis', age: 27 }
];
});
