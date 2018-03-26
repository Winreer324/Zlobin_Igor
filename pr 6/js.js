// 4 вариант
let stud = {
	name: "Ivanov",
	old: 21,
	sayName:()=>{
		console.log("Name is " + stud.name);
	}
}

let book = {
	title:"BDV",
	pages:654,
	color:"red",
	avtor:"Hign"
}
let name = {
	name:"Igor last"
}
let car = {
	speed:210
}
let arr = [stud,book,name,car]; 
let temp ={};
function callback(){
	console.log("последний объект :",arr[arr.length - 1]);  
	temp = arr[arr.length - 1];
	for(var key in temp){
		console.log(temp[key]);
	}
}; 
let a = arr[arr.length - 1];
let test = (arr,callback)=>{
	let n = 0; 
	let max = 0;
	for (var i = 0; i < arr.length; i++) {
		let x = 0;
		for (let a in arr[i]) { // считаем кол-во методов в arr[i]
			x++;
		} 
		if(max < x){ max = x;n=i;} // max 
	}   
	if(callback){
	callback(); 
	}
	else console.log("нет callback");

	console.log("макс методов в этом объекте :"); 
	return arr[n]; 
}
//  test(arr,callback)