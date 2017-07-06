function Birds(option) {
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    
    this.canX = option.canX;
    this.canY = option.canY;


    // 设置小鸟的索引 
    this.birdindex = 0;
    // 小鸟飞行的速度
    this.birdspeed = 0;
    // 加速度
    this.g = 0.0003;
    
    // 角度
    this.angle = 0;
    // 小鸟头部转动的最大角度
    this.maxAngle = 45;
    // 小鸟下落的最快速度
    this.maxSpeed = 0.4;
    // 单个小鸟的宽度
    this.birdW = option.birdImg.width / 3;
    // 小鸟的高度
    this.birdH = option.birdImg.height;
    // 图片中小鸟的横坐标
    this.birdX = 0;
    
}
Birds.prototype = {
    constructor: Birds,
    drawBirds: function (offsetT) {


        // 计算小鸟当前的速度 Vt=V0 + g*t;
        this.birdspeed = this.birdspeed + this.g * offsetT;
        // 计算重力加速度下移动的距离 S= V0*t+g*t*t/2
        this.distanceY = this.birdspeed * offsetT + this.g * offsetT * offsetT / 2;
        // 移动的距离要加载纵坐标上, 得出小鸟的位置
        this.canY += this.distanceY;
        // console.log(canY);

        // 计算小鸟下落时头部的偏转的角度 当前速度 / 当前角度 = 最大速度 / 最大角度
        var currentAngle = this.maxAngle * this.birdspeed / this.maxSpeed;
        // 最大就是45度
        if (currentAngle > 45) {
            currentAngle = 45;
        }

        // 小鸟在运动过程中切换图片 , 让小鸟看起来是在动
        this.birdX = this.birdW * this.birdindex;

        // 保存以上 
        this.ctx.save()
        // 画布偏移 , 因为要使小鸟头部转动 , 所以要把画布的坐标偏移到小鸟的中心点 , 这样画布在旋转的时候 , 小鸟会动 , 因为不能只让画布上的小鸟动 , 只能让画布带着小鸟动
        this.ctx.translate(this.canX + this.birdW / 2, this.canY + this.birdH / 2);
        // 使画布旋转
        this.ctx.rotate(Math.PI / 180 * currentAngle);
        this.ctx.drawImage(this.birdImg, this.birdX, 0, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);
        // 调回之前保存的 ,保持小鸟运动前的模样 
        this.ctx.restore();
        this.birdindex++;
        if (this.birdindex > 2) {
            this.birdindex = 0;
        };
    }
}