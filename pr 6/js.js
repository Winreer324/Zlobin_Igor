// 4 вариант
let stud = {
	name: "Ivanov",
	old: 21,
	sayName:function(){
		alert("Name is " + stud.name);
	}
} 
let book = {
	title:"BDV",
	pages:654,
	color:"red",
	avtor:"Hign"
}
let name = {
	name:"Igor last",
	name1:"Igor123 last",
	check2:function(){  alert("hello2"); },
	check1:function(){  alert("hello1"); }
}	
let car = {
	speed:210
} 
let temp ={};
let last = {
	check:function(){  alert("hello"); },
	check1:function(){  alert("hello1"); },
	check2:function(){  alert("hello2"); }
}
let arr = [stud,book,car,last,name]; 
let a = arr[arr.length - 1]; 
let test = (arr,callback)=>{ 
	let max = 0;
	let index = 0; // для возврата max object
	
	for (let i = 0; i < arr.length; i++) {
		let x = 0;// счет полей   
		for (let a in arr[i]) { // считаем кол-во методов в arr[i]
			x++;
			if(max < x){ max = x; index = i;} // max  
		}  
	}    
	////////// проверка на function
	let check_F = true; 
	let last_i = 0;
 	for (let key in a){ 
 		if(typeof a[key] === "function") check_F = true;
 		else check_F = false; 
 		last_i++;
 	}   
 	callback();
	console.log("макс методов в этом объекте :"); 
	return arr[index]; 
}
test(arr,function(){ 
	let last_i = 0;
 	for (let key in a){  
 		last_i++;
 	}   
	for(let i = last_i;i > 0; i--){
		let q = true;
		for (let key in a){  
 			if(typeof a[key] === "function")
	 	    {
	 			temp = a[key];  
	 			temp();
				q = false; 
	 		}  
	 		if(!q) break;
 		} 
 		if(!q) break;
	}  
});