/*
 * @Author: fuwei16
 * @Date:   2016-12-15 10:09:36
 * @Last Modified by:   fuwei16
 * @Last Modified time: 2016-12-15 16:56:14
 */

'use strict';
var canHeight;
var canWidth;
var can1;
var can2;
var ctx1;
var ctx2;
var deltaTime;
var lastTime;
var bgPic = new Image();
var snow;
document.body.onload = game;

function game() {
    init();

    deltaTime = 0;
    lastTime = Date.now();

    //===============
    gameloop();
}

function init() {
    var h = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
    var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
  
    //get canvas
    can1 = document.getElementById('background'); //bg
    can2 = document.getElementById('float'); //snow
    // can1.height = h-50;
    // can1.width = w - 950;
    // can2.height = h - 50;
    // can2.width = w - 950;
    //                                          
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");

    canHeight =can1.height;
    canWidth = can1.width;

    bgPic.src = "./img/background.jpg";

    snow=new snowObj();
    snow.init();


}


function gameloop() {
    requestAnimFrame(gameloop); //setInterval,setTimeout,this is more clevel,frame per second
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = Date.now();
    if (deltaTime > 20) deltaTime = 20;
    drawBackground();
    ctx2.clearRect(0, 0, canWidth, canHeight);
    snow.draw();

}

function drawBackground() {
    ctx1.drawImage(bgPic, 0, 0, canWidth, canHeight);
}
