var app = angular.module('myapp', []);

    app.controller('myController', function($scope) {

  /////////////-----------------1--------------------/////////////////
  $scope.showParagraph = false;

  /////////////-----------------2--------------------/////////////////
  $scope.showParagraph = false;
  /////////////-----------------3--------------------/////////////////
  $scope.isVisible = true;

  $scope.hideParagraph = function() {
    $scope.isVisible = false;
  }

  $scope.showParagraph = function() {
    $scope.isVisible = true;
  }
  /////////////-----------------4--------------------/////////////////
  $scope.isVisible = true;

  $scope.toggleParagraph = function() {
    $scope.isVisible = !$scope.isVisible;
  }
  /////////////-----------------5--------------------/////////////////
  $scope.showParagraph1 = true;
  $scope.showParagraph2 = true;
  $scope.showParagraph3 = true;
  $scope.showParagraph4 = true;
  $scope.showParagraph5 = true;
  $scope.showParagraph6 = true;
  /////////////-----------------8--------------------/////////////////
  $scope.countries = ['Україна', 'США', 'Канада', 'Франція', 'Іспанія', 'Італія'];

 /////////////-----------------9--------------------/////////////////
 $scope.cities = ['Київ', 'Львів', 'Дніпро', 'Нью-Йорк', 'Лос-Анджелес', 'Торонто', 'Париж', 'Барселона', 'Рим'];
 $scope.updateInput = function() {
  $scope.selectedCityInput = $scope.selectedCity;
}
 /////////////-----------------10--------------------/////////////////
 $scope.countries1 = [
  {
    name: "Україна",
    cities1: [
      { name: "Львів" },
      { name: "Чернівці" },
      { name: "Дніпро" }
    ]
  },
  {
    name: "США",
    cities1: [
      { name: "Нью-Йорк" },
      { name: "Чикаго" },
      { name: "Лос-Анджелес" }
    ]
  },
  {
    name: "Велика Британія",
    cities1: [
      { name: "Лондон" },
      { name: "Манчестер" },
      { name: "Ліверпуль" }
    ]
  }
];
});
