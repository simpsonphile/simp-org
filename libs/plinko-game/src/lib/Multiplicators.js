import Multiplicator from './multiplicator';

class Multiplicators {
  constructor({ width, count }) {
    this.width = width;
    this.count = count;
    this.btns = this.generateBtns();

    this.draw = this.draw.bind(this);
  }

  generateBtns() {
    const btns = [];
    for (let i = 0; i < this.count; i++) {
      btns.push(
        new Multiplicator({
          x: i * (this.width / this.count),
          y: 300,
          w: this.width / this.count,
          h: 30,
          text: 'x10',
          color: 'red',
        })
      );
    }

    return btns;
  }

  draw(ctx) {
    this.btns.forEach((btn) => btn.draw(ctx));
  }
}

export default Multiplicators;
