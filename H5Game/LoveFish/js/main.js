/* 
 * @Author: wells
 * @Date:   2015-11-07 18:36:50
 * @Last Modified by:   fuwei16
 * @Last Modified time: 2016-12-15 15:49:23
 */
'use strict';
var can1;
var can2;
var canWidth;
var canHeight;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var bgPic = new Image();
var ane;
var fruit;
var mom;
var mx, my;
var baby;
var babyTail = [];
var babyEye = [];
var babyBody = [];
var momTail = [];
var momEye = [];
var data;
var momBodyOra = [];
var momBodyBlue = [];
var wave;
var halo;
var dust;

var dustPic = [];
document.body.onload = game;

function game() {
	 init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	var h = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
	var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
	//get canvas
	can1 = document.getElementById('canvas1'); //fishes,dust,ui,circle
    can2 = document.getElementById('canvas2'); //bg.ane,fruite
	if (device.mobile() || device.tablet()) {
		//get canvas
		can1.height = h-50;
		can1.width = w-15;
		can2.height = h-50;
		can2.width = w-15;
		//文档禁止 touchmove事件
		can1.addEventListener('touchmove', onMouseMove, false);
	} else {
		can1.addEventListener('mousemove', onMouseMove, false);
	}
	ctx1 = can1.getContext("2d");
	ctx2 = can2.getContext("2d");
	//bg pic
	bgPic.src = "./img/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	baby = new babyObj();
	baby.init();
	for (var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = "./img/bigTail" + i + ".png";
	};
	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png"
	};
	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = "./img/babyFade" + i + ".png";
	};
	//mom Tail
	for (var i = 0; i < 8; i++) {
		momTail[i] = new Image();
		momTail[i].src = "./img/bigTail" + i + ".png";
	};
	for (var i = 0; i < 2; i++) {
		momEye[i] = new Image();
		momEye[i].src = "./img/bigEye" + i + ".png"
	};
	//mom body
	for (var i = 0; i < 8; i++) {
		momBodyOra[i] = new Image();
		momBodyOra[i].src = "./img/bigSwim" + i + ".png";
		momBodyBlue[i] = new Image();
		momBodyBlue[i].src = "./img/bigSwimBlue" + i + ".png";
	};
	data = new dataObj();
	ctx1.font = "30px  Verdana";
	ctx1.textAlign = "center";
	wave = new waveObj();
	wave.init();
	halo = new haloObj();
	halo.init();
	dust = new dustObj();
	dust.init();
	for (var i = 0; i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = "./img/dust" + i + ".png";
	};
}

function gameloop() {
	requestAnimFrame(gameloop); //setInterval,setTimeout,this is more clevel,frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = Date.now();
	if (deltaTime > 20) deltaTime = 20;
	drawBackground();
	ane.draw();
	fruitMonitor()
	fruit.draw();
	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruteCollision();
	momBabyCollision();
	// console.log(deltaTime);
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}
// 找到支持的方法, 使用需要全屏的 element 调用
function launchFullScreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

function onMouseMove(e) {
	e.preventDefault();
	if (!data.gameOver) {
		if (e.offSetX || e.layerX) {
			mx = e.offSetX || e.layerX;
			my = e.offSetY || e.layerY;
		}
	}
 
}