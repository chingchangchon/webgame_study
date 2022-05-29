var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth; // 너비 범위(전체화면)
canvas.height = window.innerHeight; // 높이 범위(전체화면)

var c = canvas.getContext('2d'); // 2d화면

c.fillStyle = 'rgba(255, 0, 0, 0.5)'; // 도형 색깔 (빨, 초, 파, 밝기)
c.fillRect(100, 100, 100, 100); // (x좌표, y좌표, 너비, 높이)
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100 ,100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 300); // 시작 점 좌표
c.lineTo(300, 100); // 해당 좌표로 선분
c.lineTo(400, 300);
c.strokeStyle = "maroon"; // 선 색깔
c.stroke();

// arc / circle

for (var i = 0; i < 3; i++) {  // for 을 이용한 반복분
    var x = Math.random() * window.innerWidth; // x, y 좌표 랜덤 후 반복
    var y = Math.random() * window.innerHeight;// + 전체화면 안에서만 뜨게하기
    c.beginPath(); 
c.arc(x, y, 30, 0, Math.PI * 7, false); // (x좌표, y좌표, 각도, 역방향표시여부)
c.strokeStyle = 'blue';
c.stroke();
}
