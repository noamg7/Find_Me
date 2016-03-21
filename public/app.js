angular.module('ngFind', [])
.controller('findMeCtrl', function($scope, $http){
  $scope.query = 'cheese';
  $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&titles="+$scope.query+"&prop=revisions&rvprop=content&format=json&callback=JSON_CALLBACK")
    .then(function(response){
        console.log(response);
    })


});




//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
