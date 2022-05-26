# 기본 설정
- 웹 게임을 구현할 배경이 되는 canvas를 만든다
- html 파일에 javascript를 연결한다
- 자바스크립트 파일에서 html의 canvas를 찾아 변수에 넣는다
- canvas의 크기를 웹 화면의 크기에 맞춘다

```html
<canvas></canvas>
```
- html의 body 태그 안에 canvas 태그를 만든다

```html
<script src="basic.js"></script>
```
- html에서 script 태그를 이용해 basic.js 파일을 연결해준다

```javascript
var canvas = document.querySelector("canvas");
```
- html의 모든 것을 포함하는 객체 document에서 canvas 객체를 찾아 새로운 변수 canvas에 넣어준다

```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```
- canvas의 넓이와 높이를 화면의 넓이와 높이에 맞춘다
