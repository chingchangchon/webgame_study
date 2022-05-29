var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;     // 너비 범위(전체화면)
canvas.height = window.innerHeight;     // 높이 범위(전체화면)

var c = canvas.getContext('2d');     // 2d화면
/*
c.fillStyle = 'rgba(255, 0, 0, 0.5)';     // 도형 색깔 (빨, 초, 파, 밝기)
c.fillRect(100, 100, 100, 100);     // (x좌표, y좌표, 너비, 높이)
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100 ,100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 300);     // 시작 점 좌표
c.lineTo(300, 100);     // 해당 좌표로 선분
c.lineTo(400, 300);
c.strokeStyle = "maroon";     // 선 색깔
c.stroke();

// arc / circle

for (var i = 0; i < 3; i++) {     // for 을 이용한 반복분
    var x = Math.random() * window.innerWidth;     // x, y 좌표 랜덤 후 반복
    var y = Math.random() * window.innerHeight;     // + 전체화면 안에서만 뜨게하기
    c.beginPath(); 
c.arc(x, y, 30, 0, Math.PI * 2, false);     // (x좌표, y좌표, 각도, 역방향표시여부)
c.strokeStyle = 'blue';
c.stroke();
}   
*/

function Circle(x, y, dx, dy, radius) {     // Circle이라는 곳(?)에 x좌표, y좌표, x변화량, y변화량, 반지름이라는 객체들을 지정
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {     // draw라는 입력된 개체들에 따른 원을 그리는 함수를 만듦 
        c.beginPath(); 
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle = 'skyblue';
        c.fill();
    }

    this.update = function(){     // update라는 공을 튀기는 현상을 객체의 변화를 통해 구현하는 함수를 만듦
        if (this.x  +  this.radius > innerWidth || this.x - this.radius < 0)  {     // 공이 깔끔하기 겉면이 화면 끝에 닿으면 반대방향으로 튀는 것 
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy =-this.dy;
        }
       this.x += this.dx;
       this.y += this.dy;

       this.draw();

    }
}

var circleArray = [];     // 반복문에 객체들을 집어 넣을 수 있는 칸(?)

for (var i = 0; i < 100; i++) {     // 공 여러개를 생성해 위의 함수대로 만드는 반복문 
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
   
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {     // 공들을 프레임단위로 움직일 수 있게 해주고 지나간 공들이 사라지게 해 깔끔하게 하는 함수를 
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();
