(function($){
	
	$.fn.addressBook = function(options) {
		
		var defaults = $.extend({
			output: '#output',
			url: 'data/contacts.json',
			query: '#q',
			viewAll: '#viewAll'
		}, options);
		
		var addr = {
			search : function(event){
		
				$.getJSON(options.url, function(data) {
		
				var searchValue = $(options.query).val(),
					addrBook = data.addressBook,
					count = addrBook.length;
					
				$(options.output).empty();
				
				if (count > 0 && searchValue !== "") {
				
					$.map(addrBook, function(obj,i) {
					
						var template = $('#addressBookTemplate').html();
						var isItFound= obj.name.match(new RegExp(searchValue,"i"));
						
						if (isItFound) {
							$(options.output).append(Mustache.to_html(template,obj));
						}
						
						
					}); // End map
					
					if ($(output).html() === "") {
						$(options.output).append('<p class="noresult">No results. Please search again.</p>');
					}
				
				} // End count
		
				}); // End Ajax call
		
			}, // End search
			
			searchAll : function(event){
				$.getJSON(options.url, function(data) {
		
				var addrBook = data.addressBook,
					count = addrBook.length;
					
				$(options.output).empty();
				
				if (count > 0) {
				
					$.map(addrBook, function(obj,i) {
					
						var template = $('#addressBookTemplate').html();
						$(options.output).append(Mustache.to_html(template,obj));
						
					}); // End map
				
				} // End count
		
				}); // End Ajax call
			
			
			} // End search
		}; // End addr object
		
		$(options.query).bind('keyup', addr.search);
		$(viewAll).click(addr.searchAll);
	
	};
	
})(jQuery);