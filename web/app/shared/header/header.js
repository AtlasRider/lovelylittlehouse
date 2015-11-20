
app.directive('lovelyheader', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/shared/header/header.html',
		controller: 'HeaderController'
	};

});

app.controller('HeaderController', [function (){
	
	skrollr.init({
	            render: function(data) {            	
	            	// $('#offset').text(data.curTop);  //Log the current scroll position.
	            	},
	            	forceHeight:false
	            });

}]);