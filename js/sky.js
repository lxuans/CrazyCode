function Sky(option){
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.x = option.x;
    this.y = option.y;

    this.skyImgW = option.skyImg.width;
    this.skyspeed = 2;
    

}
Sky.prototype = {
    constructor : Sky,
    drawSky : function(){
        // 小鸟飞的时候,天空往后走 , 两张图片的坐标往X轴的负方向偏移
        this.x -= this.skyspeed;
        // 如果图片坐标 <=图片宽度 , 说明已经已经播完 , 应该回到等待播放的坐标上,进行第二次播放
        if (this.x <= -this.skyImgW) {
            this.x += 2 * this.skyImgW
        }
        this.ctx.drawImage(this.skyImg,this.x,0);
    }
}