function Star(canvas) {
  this.x = null;
  this.y = null;
  this.speed = 1;
  this.direction = -2;
  this.size = 25;
  this.canvas = canvas; 
  this.ctx = this.canvas.getContext('2d');
}

// places the star on the canvas
Star.prototype.draw = function() {
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
}

// updates the x position of the star
Star.prototype.update = function() {
  this.x = this.x + this.direction * this.speed;
}