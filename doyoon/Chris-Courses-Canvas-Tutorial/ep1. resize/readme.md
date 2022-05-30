# Resize canvas
## Overview
1. 웹 게임을 구현할 배경이 되는 canvas를 만든다
2. html 파일에 javascript를 연결한다
3. 자바스크립트 파일에서 html의 canvas를 찾아 변수에 넣는다
4. canvas의 크기를 웹 화면의 크기에 맞춘다

## 주요 코드 정리
```html
<canvas></canvas>
```
- html의 body 태그 안에 canvas 태그를 만든다

```html
<script src="resize.js"></script>
```
- html에서 script 태그를 이용해 resize.js 파일을 연결해준다

```javascript
var canvas = document.querySelector("canvas");
```
- html에서 canvas 객체를 찾아 새로운 변수 canvas에 넣어준다

```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```
- canvas의 넓이와 높이를 화면의 넓이와 높이에 맞춘다

## 참고
### 객체의 프로퍼티, 메소드란?
- 프로퍼티는 객체의 속성, 메소드는 객체의 기능을 나타낸다
- 사람이라는 객체가 있을 때 사람이 팔을 가지고 있다는 속성은 프로퍼티, 사람이 달릴 수 있다는 기능은 메소드
- 프로퍼티는 변수, 메소드는 함수가 객체 내부에 있다는 것을 나타내기 위해 사용하는 용어이다
### window 객체
- [window 객체의 프로퍼티, 메소드 정리](https://kssong.tistory.com/29)
	+ innerWidth, innerHeight 프로퍼티가 있음을 확인할 수 있다(Explorer에선 사용 불가...)