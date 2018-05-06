// вариант 15
let i = 0;
let audio = document.getElementById("sound");
let a =	document.getElementById("imgSound").addEventListener("click",function(event) {
  audio.play();
  i++;
  if(i%2 == 0){
  	  audio.pause(); 
  } 
});  
let i1 = 0;
let audio1 = document.getElementById("sound");
let a1 = document.getElementById("imgSound1").addEventListener("click",function(event) {
  audio1.play();
  i1++;
  if(i1%2 == 0){
  	  audio1.pause(); 
  }
});  

