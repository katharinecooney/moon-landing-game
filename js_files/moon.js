function Moon(canvas) {
  this.canvas = canvas; 
  this.ctx = this.canvas.getContext('2d');
  this.size = 200;
  // this.x = this.canvas.width + this.size/2;
  // this.y = y;

}

// places the moon on the canvas
Moon.prototype.draw = function() {

this.ctx.beginPath();

this.ctx.arc(
  this.canvas.width - (this.size / 2 - 25), // starting x
  this.canvas.height - (this.size / 2 - 50), // starting y
  this.size, // radius
  0, // starting angle
  Math.PI * 2 // ending angle
  );

this.ctx.fillStyle = 'red';
this.ctx.fill();
this.ctx.closePath();



  // let img = document.createElement('img');
  // img.src = '../images/start-up.png';
  // this.ctx.drawImage(img, 400, 300, 50, 50);
}




