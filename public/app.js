angular.module('ngFind', []);
.service('wikiService', function($http){
  $http({
    url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
    method: 'json' 
  })
}



//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
