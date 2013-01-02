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
				
				$.map(addrBook, function(obj,i) {
				
					var isItFound = obj.name.indexOf(searchValue);

					if(isItFound !== -1) {
						
						output.append('<p>' + '<a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
						 
					}
					
				}); // End map
				
			} // End count
		
		}); // End ajax call
		
	}
	
};
	$("#search-form").bind('keyup', addr.search);
	
}); // End document.ready