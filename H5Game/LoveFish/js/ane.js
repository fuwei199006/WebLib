/* 
 * @Author: wells
 * @Date:   2015-11-07 19:14:07
 * @Last Modified by:   wells
 * @Last Modified time: 2015-11-08 14:24:28
 */
'use strict';
var aneObj = function() {
    //start point ,control point endpoint(sin)
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.alpha=0;
    this.amp=[];
    
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 20 + Math.random() * 20; //[0,1)
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i]=Math.random()*50+50;
    }
}
aneObj.prototype.draw = function() {
    this.alpha+=deltaTime*0.0008;
    var l=Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#3b154e";
    for (var i = 0; i < this.num; i++) {
        //beginpath,moveto,lineto,stroke,strokeStyle,Linewidth,linCop,global
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        this.headx[i]=this.rootx[i]+l*this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100,this.headx[i],this.heady[i]);
        ctx2.stroke();
    };
    ctx2.restore();
}