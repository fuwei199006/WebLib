/* 
 * @Author: wells
 * @Date:   2015-11-07 19:35:53
 * @Last Modified by:   wells
 * @Last Modified time: 2015-11-08 13:47:26
 */

'use strict';
var fruitObj = function() {
    this.alive = []; //bool
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
    this.organe = new Image();
    this.blue = new Image();
    this.aneNo=[];
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function() {

    for (var i = 0; i < this.num; i++) {
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003; //(0.003,0.02]
        this.fruitType[i] = '';
        this.born(i);
    };
    this.organe.src = "./img/fruit.png";
    this.blue.src = "./img/blue.png";
}

fruitObj.prototype.draw = function() {
    for (var i = 0; i < this.num; i++) {
        //draw 
        //find an ane,grow,fly up
        if (this.alive[i]) { //only alive is true,then boin
            var pic;
            if (this.fruitType[i] == "blue") {
                pic = this.blue;

            } else {
                pic = this.organe;

            }
            if (this.l[i] <= 14) {
                var no=this.aneNo[i];
                this.x[i]=ane.headx[no];
                this.y[i]=ane.heady[no];
                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < -10) {
                this.alive[i] = false;
            }

        }

    };

}

fruitObj.prototype.born = function(i) {
    this.aneNo[i] = Math.floor(Math.random() * ane.num);
    // this.x[i] = ane.headx[aneId];
    // this.y[i] = ane.heady[aneId];
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.2) {
        this.fruitType[i] = "blue";
    } else {
        this.fruitType[i] = "orange";
    }

}
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
}
function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) num++;
    };
    if (num < 15) {
        //send fruit
        sendFruit();
        return;
    }
}

function sendFruit() {
    // body...
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            return;
        }
    };
}
fruitObj.prototype.update = function() {
    var num = 0;
    // for (var i = 0; i < this.num; i++) {
    // 	this[i]
    // };
}
