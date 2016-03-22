angular.module('ngFind', [])
.controller('findMeCtrl', function($scope, $http){
  $scope.query = 'Albert Einstein';
  $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&titles="+$scope.query+"&prop=revisions&rvprop=content&format=json&callback=JSON_CALLBACK")
    .then(function(response){
        console.log(response);
        // $scope.query.categories.title = "title",
        // $scope.query.images = "img",
        // $scope.query.title = "Occupation",
        // $scope.query.categories.title = "Birth",
        // $scope.query.categories.title = "Death",
    })
   var function(data){
    $scope.query.categories.title = "title",
    $scope.query.images.title = "img",
    $scope.query.title = "Occupation",
    $scope.query.categories.title = "Birth",
    $scope.query.categories.title = "Death",
   }



});




//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
