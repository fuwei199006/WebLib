/* 
 * @Author: wells
 * @Date:   2015-11-08 11:18:30
 * @Last Modified by:   wells
 * @Last Modified time: 2015-11-08 12:17:33
 */
'use strict';
var dataObj = function() {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}
dataObj.prototype.reset = function() {
    this.fruitNum = 0;
    this.double = 1;
}
dataObj.prototype.draw = function() {
    var w = can1.width;
    var h = can1.height;
    ctx1.save();
    ctx1.shadowBlur=10;
    ctx1.fillStyle = "white";
    ctx1.fillText("SCORE:" + this.score, w * 0.5, h - 20);
    if (this.gameOver) {
        this.alpha += deltaTime * 0.0005;
        if (this.alpha > 1) {
            this.alpha = 1;
        }
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("Game Over", w * 0.5, h * 0.5);
    }
    ctx1.restore();
}
dataObj.prototype.addScore = function() {
    this.score += this.fruitNum * this.double * 100;
    this.fruitNum = 0;
    this.double = 1;
}