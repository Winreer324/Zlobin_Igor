// 3 вариант
let arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = 1;
}
let temp = [];
function funct(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= i;
	}return arr;
}
function map(fn,arr){
	return temp = fn(arr);
}