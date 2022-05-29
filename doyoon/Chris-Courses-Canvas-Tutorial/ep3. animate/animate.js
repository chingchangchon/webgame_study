var canvas = document.querySelector('canvas');

//resize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var x = 200;
var dx = 4;
var radius = 30;

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth, innerHeight);
	
	c.beginPath();
	c.arc(x, 200, radius, 0, Math.PI * 2, false); //x, y, radius, startAngle, endAngle, counterclockwise
	c.strokeStyle = 'blue';
	c.stroke();
	
	if (x + radius + dx > innerWidth || x - radius +dx < 0){
		dx = -dx;
	}
	
	x += dx;
}
animate();