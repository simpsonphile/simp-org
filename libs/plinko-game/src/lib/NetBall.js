import Particle from './Particle';

class NetBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = '#ffffff';
    this.shadowColor = '#ffffff33';
    this.sprite = new Particle(x, y, r, this.color);
    this.shadowRMaxMultiplier = 3;
    this.shadowSprite = new Particle(
      x,
      y,
      r * this.shadowRMaxMultiplier,
      this.shadowColor
    );

    this.shadowTick = 0;
  }

  hit() {
    this.shadowTick = 30;
  }

  draw(ctx) {
    if (this.shadowTick > 0) {
      this.shadowSprite.draw(ctx);
      this.shadowTick--;
    }

    this.sprite.draw(ctx);
  }
}

export default NetBall;
