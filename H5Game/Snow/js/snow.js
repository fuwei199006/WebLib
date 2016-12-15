/*
 * @Author: fuwei16
 * @Date:   2016-12-15 10:27:53
 * @Last Modified by:   fuwei16
 * @Last Modified time: 2016-12-15 22:18:48
 */

'use strict';
var snowObj = function() {
    this.x = [];
    this.y = [];
    this.speed = [];
    this.size = [];
    this.height;
}

snowObj.prototype.num = 1000;
snowObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.speed[i] = Math.random() * 0.017 + 0.003;
        this.size[i] = Math.ceil(Math.random() * 4) + 2.5;
        this.height = 0;
    }

}
snowObj.prototype.draw = function() {

    ctx2.lineCap = "round";



    for (var i = 0; i < this.num; i++) {
        this.y[i] = this.y[i] + deltaTime * this.speed[i] * 7;
        ctx2.lineWidth = this.size[i];
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], this.y[i]);
        ctx2.lineTo(this.x[i] + Math.random() * 0.8, this.y[i] + Math.random() * 0.8);
        ctx2.strokeStyle = '#ffffff';
        ctx2.stroke();
        if (this.y[i] > canHeight) {
            this.y[i] = 0;
            //堆积效果
            
           
            // if(this.height<canHeight*0.5){
            // 	 this.height =  Math.random()*0.05 + this.height;
            // }
            // ctx2.lineWidth = this.height;
            // ctx2.beginPath();
            // ctx2.moveTo(0, canHeight);
            // ctx2.lineTo(canWidth, canHeight);
            // ctx2.strokeStyle = '#ffffff';
            // ctx2.stroke();
        }
    }

}
