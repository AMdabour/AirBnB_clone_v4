$(function () {
    amenities = {};
    $('li input[type=checkbox]').change(function () {
        if (this.checked) {
            amenities[this.dataset.name] = this.dataset.id;
        } else {
            delete amenities[this.dataset.name];
        }
        $('.amenities h4').text(Object.keys(amenities).sort().join(', '));
    });

	$.get('http://localhost:5001/api/v1/status/', function(data){
    if (data.status === "OK"){
        $('div#api_status').addClass('available');
    }
    else {
        $('div#api_status').removeClass('available');
    }
	}).fail(function() {
    	console.log("Error in GET request");
	});

});


