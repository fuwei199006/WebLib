/* 
 * @Author: wells
 * @Date:   2015-11-07 18:36:50
 * @Last Modified by:   wells
 * @Last Modified time: 2015-11-08 13:57:04
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
var dustPic=[];
document.body.onload = game;

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    //get canvas
    can1 = document.getElementById('canvas1'); //fishes,dust,ui,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById('canvas2'); //bg.ane,fruite
    ctx2 = can2.getContext("2d");
    can1.addEventListener('mousemove', onMouseMove, false);
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
    wave=new waveObj();
    wave.init();
    halo=new haloObj();
    halo.init();
    dust=new dustObj();
    dust.init();
    for (var i = 0; i < 7; i++) {
        dustPic[i]=new Image();
        dustPic[i].src="./img/dust"+i+".png";
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

function onMouseMove(e) {
    if (!data.gameOver) {
        if (e.offSetX || e.layerX) {
            mx = e.offSetX || e.layerX;
            my = e.offSetY || e.layerY;
        }
    }
}