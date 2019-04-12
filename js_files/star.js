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
  
}

// updates the x position of the star
Star.prototype.update = function() {

}