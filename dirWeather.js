var app = angular.module('directivePractice');

app.directive('dirWeather', function(){

console.log("Weather directive working")
	
	return {
		
		templateUrl: "dirWeather.html",
		
		scope: {

			currentUser: '=', 
			 weatherCall: '&'
		},

		controller: function($scope){
			$scope.weatherCall({city: $scope.currentUser.city}).then(function(results){
				console.log (results)
				results= $scope.newWeather;
			});
		}
	}

});
