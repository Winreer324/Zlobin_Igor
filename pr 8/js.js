// вариант 15  
let sound = new Audio([src="1.mp3"]); 
let body = document.getElementById("body").addEventListener("mouseout",function(event) { 
      sound.pause();   
});   

let img_main =	document.getElementById("imgSound").addEventListener("mouseover",function(event) { 
      sound.play();   
});   
   
let img_footer = document.getElementById("imgSound1").addEventListener("mouseover",function(event) { 
      sound.play();   
});  

