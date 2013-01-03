(function($){
	
	$.fn.addressBook = function(options) {
		
		var defaults = {
			output: '#output',
			url: 'data/contacts.json',
			query: '#q',
		};
		
		var options = $.extend(defaults,options);
		
		var addr = {
	
			search : function(event){
		
				$.getJSON(options.url, function(data) {
		
				var searchValue = $(options.query).val(),
					addrBook = data.addressBook,
					count = addrBook.length;
					
				$(options.output).empty();
				
				if (count > 0 && searchValue !== "") {
				
					$.map(addrBook, function(obj,i) {
					
						var isItFound = obj.name.indexOf(searchValue);
	
						if(isItFound !== -1) {
						
							$(options.output).append('<p>' + '<a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
						 
						}
						
					}); // End map
				
				} // End count
		
				}); // End Ajax call
		
			} // End search
		}; // End addr object
		
		$(options.query).bind('keyup', addr.search);
	
	};
	
})(jQuery);