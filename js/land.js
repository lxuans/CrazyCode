function Land(option){
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.x = option.x;
    this.y = option.y;
    this.landspeed = 2;

    this.landImgW = option.landImg.width;
    this.landImgH = option.landImg.height;
}
Land.prototype = {
    constructor : Land,
    drawLand : function(){
        this.x -= this.landspeed;
        if (this.x <= -this.landImgW) {
            this.x = this.landImgW * 3
        }
        this.ctx.drawImage(this.landImg,this.x,this.y)
    }
}