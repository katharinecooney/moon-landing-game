function Star(canvas, y) {
  this.canvas = canvas; 
  this.ctx = this.canvas.getContext('2d');
  this.size = 40;
  this.x = this.canvas.width + this.size/2;
  this.y = y;
  this.speed = 3;
  this.direction = -2;
  this.image = new Image();
  this.image.src = './images/star.png';
}

// places the star on the canvas
Star.prototype.draw = function() {
  this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
}

// updates the x position of the star
Star.prototype.update = function() {
  this.x = this.x + this.direction * this.speed;
}