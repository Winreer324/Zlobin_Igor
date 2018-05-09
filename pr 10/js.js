let agent = navigator.userAgent;    
let versia;
function get_index(){  
	    if (agent.search(/OPR/) > 111) {let index = agent.search(/OPR/); versia = agent[index+4] + agent[index+5];}   
	    else if (agent.search(/Chrome/) > 80) {let index = agent.search(/Chrome/); versia = agent[index+7] + agent[index+8]; }
	    if (agent.search(/Firefox/) > 1) {let index = agent.search(/Firefox/); versia = agent[index+8] + agent[index+9];}
	    if (agent.search(/Trident/) > 1) {let index = agent.search(/Trident/); versia = agent[index+8] + agent[index+9] + agent[index+10];}
	    if (agent.search(/Edge/) > 100) {let index = agent.search(/Edge/); versia = agent[index+5] + agent[index+6];} 
    return versia;
}     
let img = document.getElementById("img_pr").addEventListener("click",function(event) { 
	if(get_index() < 50) alert("Обновите браузер \n"+ "Ваша версия браузера "+get_index());  
	else alert("Всё ок\n" + "Ваша версия браузера "+get_index());
    alert(navigator.userAgent);
});   
let img1 = document.getElementById("img_pr1").addEventListener("click",function(event) { 
	if(get_index() < 50) alert("Обновите браузер \n"+ "Ваша версия браузера "+get_index());  
	else alert("Всё ок\n" + "Ваша версия браузера "+get_index());
    alert(navigator.userAgent);
});   
