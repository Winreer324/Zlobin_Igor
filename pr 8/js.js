// вариант 15 
let audio = document.getElementById("sound");
let audio1 = document.getElementById("sound"); 

let body = document.getElementById("body").addEventListener("mouseout",function(event) { 
      audio.pause();   
});   

let img_main =	document.getElementById("imgSound").addEventListener("mouseover",function(event) { 
      audio.play();   
});   
   
let img_footer = document.getElementById("imgSound1").addEventListener("mouseover",function(event) { 
      audio.play();   
});  

