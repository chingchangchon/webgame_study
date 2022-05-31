var canvas = document.querySelector('canvas');


//resize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//how to draw rectangle
c.fillStyle = 'rgba(255, 0,0,0.5)';
c.fillRect(50, 100, 200, 150);
c.fillStyle='rgba(0,0,255,0.5)';
c.fillRect(100,50, 100, 150);
console.log(canvas);
