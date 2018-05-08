 
let a = $('.menu a').click(function(){  

	a.hide(250, function(){
		setTimeout(function(){
			a.show(250).animate({
	     		fontSize: 25,  
			}); 
		}, 3000);
	}); // a 
	let href = $(this).show(150).animate({
	    fontSize: 45
	}); 
});  
