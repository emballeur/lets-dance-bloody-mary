class Glass {
  constructor() {
    this.x = 60;
    this.y = 520;
    this.width = 50;
    this.height = 60;
    this.image = new Image();
    this.image.src = "../images/BM_Icon.png";
    this.speed = 5;
    this.acceleration = 0;
  }

  drawGlass = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    //ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  glassSpeed = (amount) => {
    this.acceleration = amount;
  };

  glassMove = () => {
    if (this.x < 0) {
      this.acceleration = 0.2;
    } else if (this.x + this.width > canvas.width) {
      this.acceleration = -0.2;
    }
    this.x += this.speed * this.acceleration;
  };

  checkCollision = (something) => {
    if (
      this.x < something.x + something.width &&
      this.x + this.width > something.x &&
      this.y < something.y + something.height &&
      this.y + this.height > something.y
    ) {
      // collision detected!
      return true;
    }
    return false;
  };
}
