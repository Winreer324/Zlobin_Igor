function rand(max,min){
	return Math.round(Math.random()* (max - min)) + min;
} 
let randomNumber = rand(1000,1);
let randomSize = rand(30,1);

function draw() {
 	let canvas = document.getElementById('canvas');
 	let ctx = canvas.getContext("2d");
 	canvas.width  = 1240;
    canvas.height = 480; 

	ctx.font = "30px Arial";
	ctx.fillText(randomSize.toString(),10,50); 

} 

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// // Define some size
// var radius = canvas.height / 2;

// // Center the ctx
// ctx.translate(radius,radius);

// // Draw the Clock every second
// setInterval(drawClock, 100);

// // Draw the Clock
// function drawClock() {
//     drawFace(ctx, radius);
//     drawNumbers(ctx, radius);
//     drawTime(ctx,radius);
//     drawSteps(ctx, radius)
//     drawNose(ctx, radius)
// }

// // Define how to draw the Face
// function drawFace(ctx, radius) {
//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, 2*Math.PI);
//     ctx.fillStyle = "#F8F8FF";
//     ctx.fill();
// }

// // Define how to draw the Numbers
// function drawNumbers(ctx, radius) {
//     var ang;
//     var num;

//     // Define the text styles
//     ctx.font = "14px 'Lato'";
//     ctx.fillStyle = "black";
//     ctx.textBaseline = "middle";
//     ctx.textAlign = "center";

//     // Rotate and put number and rotate back
//     for(num=1; num<=12; num++) {
//         ang = num * Math.PI / 6;
//         ctx.rotate(ang);
//         ctx.translate(0, -radius*0.85);
//         ctx.rotate(-ang);
//         ctx.fillText(num.toString(), 0, 0);
//         ctx.rotate(ang);
//         ctx.translate(0, radius*0.85);
//         ctx.rotate(-ang);
//     }
// } 