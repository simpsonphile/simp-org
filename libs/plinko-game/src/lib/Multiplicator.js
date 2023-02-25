class Multiplicator {
  constructor({ x, y, w, h, text, color }) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.stokeStyle = this.color;

    ctx.rect(this.x, this.y, this.w, this.h);
    console.log('dykta', this.x, this.y, this.w, this.h);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(this.text, this.x, this.y, this.w);
  }
}

export default Multiplicator;
