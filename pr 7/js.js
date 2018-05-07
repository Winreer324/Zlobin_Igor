let true_false = true;
let i = 0; 
 function f(){ 
	let addCcontent = document.getElementById('addCcontent'); 
	addCcontent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis error.";  
	addCcontent.style.color = "red";
	addCcontent.style.position = "absolute";
 	addCcontent.style.fontSize = "30px";
    addCcontent.style.width = "210px"; 
    addCcontent.style.top = "10px";   
	addCcontent.style.left = "230px";    
	console.log("work"); 

	let img = document.getElementById('img_fut').style.margin = "-650px 100px 0 0"; 
}; 
function count(){
	function ii(){
		return i++;
	} 
	if(i == 0){ i++;f();}
	if(i == 2){ 
		i = 0; addCcontent.innerHTML = "";
		let img = document.getElementById('img_fut').style.margin = "0 0 0 0"; 
	} 
 	console.log("\n");
 	ii();
 	console.log(i-1);
 	return i; 	
}