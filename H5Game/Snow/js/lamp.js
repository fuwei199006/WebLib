/*
 * @Author: fuwei16
 * @Date:   2016-12-16 14:23:48
 * @Last Modified by:   fuwei16
 * @Last Modified time: 2016-12-16 16:51:59
 */

'use strict';
var lampObj = function() {
    this.x = [];
    this.y = [];
    this.color = [];

}

lampObj.prototype.num = 60;

lampObj.prototype.init = function() {
    var wNum = 60 * 0.3;
    var hNum = 60 * 0.2;
    for (var i = 0; i < this.num; i++) {
        if (i <= wNum) {
            this.x[i] = 55 * i - 20;
            this.y[i] = Math.ceil(Math.random() * 10) + 5;
        } else if (i <= wNum + hNum) {
            this.x[i] = canWidth - Math.ceil(Math.random() * 10) - 10;
            this.y[i] = 70 * (i - wNum) - 20;


        } else if (i <= wNum + hNum + wNum) {
            this.x[i] = 55 * (i - wNum - hNum) - 20;
            this.y[i] = canHeight - Math.ceil(Math.random() * 10)  - 5;

        } else {
            this.x[i] = Math.ceil(Math.random() * 10)  + 10;
            this.y[i] = 70 * (i - wNum - wNum - hNum) - 20;
        }

    }

}

lampObj.prototype.draw = function() {
    // for (var i = 0; i < this.num; i++) {
    //     var grd = ctx2.createRadialGradient(this.x[i], this.y[i], 5, this.x[i], this.y[i], 10);
    //     grd.addColorStop(0, "#FF0000");
    //     grd.addColorStop(1, "#00FF00");
    //     ctx2.fillStyle = grd;
    //     ctx2.beginPath();
    //     ctx2.arc(this.x[i], this.y[i],10,0, Math.PI * 2, true);
    //     ctx2.stroke();
    //     ctx2.fill();

    // }
}
