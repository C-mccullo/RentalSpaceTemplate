var rentalspace = {

};

rentalspace.addWrapper = function() {
	if (window.matchMedia("(max-width: 914px)").matches) {
		console.log('the max width is reached')
	  $('.target').removeClass('wrapper');
	} else {
	  $('.target').addClass('wrapper');
	}
};
	
$(document).ready(function() {
	rentalspace.initialWrapper;
	$(window).resize(function(){
		rentalspace.addWrapper();
	});
});