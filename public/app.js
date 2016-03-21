angular.module('ngFind', [])
.controller('findMeCtrl', function($scope, $http){
  $scope.query = 'cheese';
  $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&titles="+$scope.query+"&prop=revisions&rvprop=content&format=json&callback=JSON_CALLBACK")
    .then(function(response){
        console.log(response);
    })




// .config(['$httpProvider', function($httpProvider) {
//   $http({
//     url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
//     method: 'json'
//   });
});

// app.use(function(req, res, next){
//   req.header('Access-Control-Allow-Origin', "*");
//   req.header('Access-Control-Allow-Methods', "GET");
//   req.header('Access-Control-Allow-Headers', "Content-Type");
//   next();
// })

//
// $scope.wikiTodo = function(){
//
// }
// {{query.title}}


//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
