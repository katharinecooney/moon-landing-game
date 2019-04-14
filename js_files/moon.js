function Moon(canvas) {
  this.canvas = canvas; 
  this.ctx = this.canvas.getContext('2d');
  this.size = 300;
  this.red = 100;
  this.green = 100;
  this.blue = 100;
}

Moon.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.canvas.width - (this.size / 2 - 100), this.canvas.height - (this.size / 2 - 125), this.size, 0, Math.PI * 2);
  this.ctx.fillStyle = `rgba(202, 202, 202, 0.479)`; 
  this.ctx.fill();
  this.ctx.closePath();
}