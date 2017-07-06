function Pipe(option){
    this.ctx = option.ctx;
    // 图片
    this.topPipe = option.topPipe;
    this.bottomPipe = option.bottomPipe;
    this.pipeX = option.pipeX;

    this.topY = 0;
    this.bottomY = 0;

    this.topW = option.topPipe.width;
    this.topH = option.topPipe.height;
    this.speed = 2;
    this.space = 150;

    this.getY();
}

Pipe.prototype = {
    constructor : Pipe,
    drawPipe : function(){

        this.pipeX -= this.speed;

        if (this.pipeX < - this.topW * 3) {
            // 3个管道的宽度为一组 , 一个页面需要准备6组
            this.pipeX += 3 * this.topW * 6
            // 再次获取管道的纵坐标 , 才不会使每六组都是一样的高度
            this.getY();
        }

        this.ctx.drawImage(this.topPipe,this.pipeX,this.topY);
        this.ctx.rect(this.pipeX,this.topY,this.topW,this.topH);
        this.ctx.drawImage(this.bottomPipe,this.pipeX,this.bottomY);
        this.ctx.rect(this.pipeX,this.bottomY,this.topW,this.topH);
    },
    getY : function(){
        this.topY = - (Math.random() * 250 + 120);
        this.bottomY = this.topY + this.topH + this.space;
    }
}