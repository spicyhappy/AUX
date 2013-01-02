$(document).ready(function () {
	
	var output = $('#output');
	
	// Address book methods
	var addr = {
	
	search : function(event){
		
		$.getJSON('data/contacts.json', function(data) {
		
			var searchValue = $("#q").val(),
				addrBook = data.addressBook,
				count = addrBook.length;
				
			output.empty();
			
			if (count > 0 && searchValue !== "") {
				
				$.each(addrBook, function (i,obj) {
					var isItFound = obj.name.indexOf(searchValue);
					if(isItFound !== -1) {
						
						output.append('<p>' + '<a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
						
					}
					
				}); // End each
				
			} // End count
		
		}); // End ajax call
		
	}
	
};
	$("#search-form").bind('keyup', addr.search);
	
}); // End document.ready