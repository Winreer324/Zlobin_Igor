<?php
// вариант 11
$a = 111;
$b = 999;

function change(&$a,&$b){ // 1
//function change($a,$b){ // 2

	echo "До<br>"."\$a = ".$a."<br>";
	echo "\$b = ".$b;	

	$a =(int) $a + $b;//111+999=1110 // sum 
	$b =(int) $a - $b;//1110-999=111 // a 
	$a =(int) $a - $b; //1110-111=999 // b
 
	echo "<br>После<br>"."\$a = ".$a."<br>";
	echo "\$b = ".$b;
}	

change($a,$b);       // что бы изменить их в не функции 
// change(777,344);  // если вводить просто числа, то 2 вариант 
// не знаю как нужно было бля проверки 


//echo "<br>".$a;