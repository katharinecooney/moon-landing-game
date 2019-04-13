function Star(canvas, y) {
  this.canvas = canvas; 
  this.ctx = this.canvas.getContext('2d');
  this.size = 25;
  this.x = this.canvas.width + this.size/2;
  this.y = y;
  this.speed = 2;
  this.direction = -2;
 
  
}

// places the star on the canvas
Star.prototype.draw = function() {
  this.ctx.fillStyle = 'yellow';
  this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
}

// updates the x position of the star
Star.prototype.update = function() {
  this.x = this.x + this.direction * this.speed;
}