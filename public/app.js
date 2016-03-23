angular.module('ngFind', [])
.controller('findMeCtrl', function($scope, $http){
  $scope.query = 'Albert Einstein';
  $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Ccategories%7Cimages%7Ctemplates&titles=Albert+Einstein&callback=JSON_CALLBACK")
    .then(function(response){
        console.log(response.data);
        $scope.data = response.data;

    })

});




//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
