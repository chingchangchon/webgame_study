# Resize canvas
## Overview
- 직사각형, 선, 원을 그린다

## 주요 코드 정리

```javascript
var c = canvas.getContext('2d');
```
- canvas 객체의 메서드 ```getContext```를 통해 2d 물체를 그릴 수 있는 객체를 생성한 후 이를 변수에 할당한다

```javascript
c.fillRect(100, 100, 100, 100);
```
- 사각형 그리기
- 각각 x좌표, y좌표, 넓이, 높이를 나타낸다
- x좌표, y좌표는 사각형의 왼쪽 모서리의 위치를 말한다

```javascript
c.moveTo(50, 300);
c.lineTo(300, 100);
c.stroke();
```
- 선 그리기
- ```moveTo```를 통해 시작점을 잡는다
- ```lineTo```를 통해 이전 위치에서부터 이어질 점을 잡는다
- ```stroke```를 통해 실제로 선을 긋는다

```javascript
c.arc(300,300,30,0, Math.PI *2, false);
```
- 원 또는 호 그리기
- 각각 x좌표, y좌표, 반지름, 시작 각도, 끝 각도, 시계 방향 여부를 나타낸다
- x좌표, y좌표는 원 또는 호의 중심의 위치에 해당한다

```javascript
c.beginPath();
```
- 작성하지 않으면 이전 위치의 점에서부터 선이 이어진다

```javascript
c.fillStyle = 'rgba(255, 0,0,0.5)';
c.strokeStyle = "#fa34a3"
```
- 도형, 선의 색을 결정한다
- blue와 같이 색을 직접 입력할 수 있고, 16진법 색을 입력할 수 있으며, 다음과 같이 rgba를 이용할 수도 있다
- 도형 색의 경우 도형을 그리기 전에, 선 색의 경우 선을 그린 후에 코드를 작성한다

```javascript
c.strokeStyle = "#fa34a3"
```

## 참고
