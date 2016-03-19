angular.module('ngFind', [])
.controller('findMeCtrl', function($scope, $http){
  $http.get("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content")
    .then(function(data){
        $scope.query.title = "title";
    })
//.config(['$httpProvider', function($httpProvider) {
  // $http({
  //   url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
  //   method: 'json'
  // });
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
