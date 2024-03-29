/* 
 * @Author: wells
 * @Date:   2015-11-07 23:14:16
 * @Last Modified by:   wells
 * @Last Modified time: 2015-11-08 12:01:27
 */
'use strict';
var babyObj = function() {
    this.x;
    this.y;
    // this.babyEye = new Image();
    this.babyBody = new Image();
    // this.babyTail = new Image();
    this.angle;
    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;
    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
}
babyObj.prototype.init = function() {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    // this.babyEye.src = "./img/babyEye0.png";
    this.babyBody.src = "./img/babyFade0.png";
    // this.babyTail.src = "./img/babyTail0.png";
    this.angle = 0;
}
babyObj.prototype.draw = function() {
    this.x = lerpDistance(mom.x, this.x, 0.98);
    this.y = lerpDistance(mom.y, this.y, 0.98);
    //delta angle
    //Math.atan(y,x)
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;
    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);
    //baby Tail
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }
    //baby Eye
    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if (this.babyEyeCount === 0) {
            this.babyEyeInterval = Math.random() * 1500 + 2000; //[0,1)
        } else {
            this.babyEyeInterval = 200; //[0,1)
        }
    }
    //babybody
    this.babyBodyTimer+=deltaTime;
    if(this.babyBodyTimer>300){
        this.babyBodyCount=this.babyBodyCount+1;
        this.babyBodyTimer%=300;
        if(this.babyBodyCount>19){
            this.babyBodyCount=19;
            //game over
            data.gameOver=true;
            
        }
    }
    ctx1.save();
    ctx1.translate(this.x, this.y)
    ctx1.rotate(this.angle);
    var babyTailCount = this.babyTailCount;
    ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 23, -babyTail[babyTailCount].height * 0.5);
    var babyBodyCount=this.babyBodyCount;
    ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width * 0.5, -babyBody[babyBodyCount].height * 0.5);
    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);
    ctx1.restore();
}