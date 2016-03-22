var myApp = angular.module("myApp", []);

myApp.controller("IntroController", ["$scope", "$http", function($scope, $http){

  $scope.studentArray = [];

  $scope.getData = function(){
    $http.get("/kappaCatsHo").then(function(response){
      // console.log(response.data);
      // console.log($scope.studentArray);
      $scope.studentArray = response.data.students;
      console.log($scope.studentArray);

    });
  };

    $scope.getData();
}]);
