var app = angular.module("lovelyapp", []);


app.directive('lovelyheader', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/shared/header/header.html',
		controller: 'HeaderController'
	};

});

app.controller('HeaderController', [HeaderController]);

function HeaderController() {
	
	skrollr.init({
        render: function(data) {            	
    	// $('#offset').text(data.curTop);  //Log the current scroll position.
    	},
    	forceHeight:false
    });

}