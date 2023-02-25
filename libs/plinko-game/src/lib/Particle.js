const randomColor = () => {
  const colors = ['#c2aff0', '#9191e9', '#457eac', '#2d5d7b'];

  return colors[Math.floor(Math.random() * colors.length)];
};

class Particle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.color = color || randomColor();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
}

export default Particle;
