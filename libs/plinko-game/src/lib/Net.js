import NetBall from './NetBall';

class Net {
  constructor({
    rowsCount = 10,
    startsFrom = 3,
    w,
    h,
    cellWidth,
    cellHeight,
    cellCount,
  }) {
    this.rowsCount = rowsCount;
    this.startsFrom = startsFrom;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.cellCount = cellCount;
    this.w = w;
    this.h = h;
    this.netBalls = [];
    this.generateNet();

    this.draw = this.draw.bind(this);
  }

  generateNet() {
    for (let i = 0; i < this.rowsCount; i++) {
      const count = this.startsFrom + i;
      const y = i * this.cellHeight;

      for (let j = 0; j < count; j++) {
        const cellIndex = (this.cellCount - 1) / 2 - i + j;
        const x = cellIndex * this.cellWidth + (this.cellWidth / 2) * i;
        this.netBalls.push(new NetBall(x, y, 4, '#000000'));
      }
    }
  }

  hit(x, y) {
    console.log(y);

    const getIndex = (i) => {
      if (i === 0) return 0;
      if (i === 1) return 3;
      if (i === 2) return 7;
      return getIndex(i - 1) + 3 + i - 1;
    };

    // 0 -> 0
    // 1 -> 3 = 3 + 0 + 0
    // 2 -> 7 = 3 + 3 + 1
    // 3 -> 12 = 7 + 3 + 1 + 1
    // 4 -> 18 = 12 + 3 + 1 + 1 + 1
    // 5 -> 25

    const index = getIndex(y) + Math.ceil((y + 3) / 2) + x;

    this.netBalls[index].hit();
  }

  draw(ctx) {
    this.netBalls.forEach((netBall) => netBall.draw(ctx));
  }
}

export default Net;
