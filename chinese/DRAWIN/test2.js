var canvas=document.querySelector('canvas');

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

//var c = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
//c.fillStyle='rgba(255, 0, 0,0.5)';
c.fillStyle = 'rgba(255, 0,0,0.5)';

c.fillRect(100,100,100,100);
c.fillStyle="yellow";
c.fillRect(400,400,400,400);
console.log(canvas);

//line
c.beginPath();
c.strokeStyle='rgba(0,0,255,0.8)'
c.moveTo(50,50);
c.lineTo(250,300);
c.moveTo(100,100);
c.lineTo(100,200);
c.lineTo(200,200);
c.moveTo(100,100);
c.lineTo(200,100);
c.stroke();

//arc/circle
//지우고싶다면
c.beginPath();
c.arc(300,300,30,0, Math.PI*2,false);
c.arc(150,300,30,0,Math.PI*2,false);

for (var i = 0; i < 50; i++) {
    var x= Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2, false);
    c.stroke();
    
}

