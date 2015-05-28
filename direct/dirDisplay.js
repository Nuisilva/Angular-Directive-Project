var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){


  return {
    	templateUrl: 'direct/dirDisplay.html',
    	
    	link: function(scope, element, attribute){
    		element.on('click', function(){
    		scope.show = !scope.show;
       		scope.$apply();
			}); // why ; here
		
		}
    }; // and here
});			