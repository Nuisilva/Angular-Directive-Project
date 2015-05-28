var app = angular.module('directivePractice');

app.service( 'weatherService', function($http, $q){
	
	var dfd = $q.defer();
	
	this.getWeather = function(city) {
		return $http ({
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city,
			method: 'GET'

			}).then (function(data){
				console.log(data),
			 	dfd.resolve({
			 		 weather: data.data.weather[0].description,
			 		 temp: data.data.main.temp
			 		})
			 })
		return dfd.promise;	
	}
})