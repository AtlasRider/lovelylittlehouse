//initiate skroll r - include always.
( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} );

var setSkrollr = function($el, data) {
	for (var i = 0, l = data.length; i < l; i++) {
		var d = data[i],
		px = d[0];
		css = d[1];
		$el.attr('data-' + px, css);
	}
}
