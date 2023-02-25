class Scene {
  constructor({ element, w, h, p }) {
    this.w = w + p * 2;
    this.h = h + p * 2;
    this.ctx = element.getContext('2d');
    this.ctx.transform(1, 1, 1, 1, p, p);
    element.style.backgroundColor = 'black';
    element.width = this.w;
    element.height = this.h;
    element.appendChild = this.canvas;

    this.sprites = [];
  }

  add(sprite) {
    this.sprites.push(sprite);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.sprites.forEach((sprite) => sprite.draw(this.ctx));
  }
}

export default Scene;
