import Particle from './Particle';

const isWon = (chance) => {
  const y = 1 / 2 ** (chance + 1);

  return Math.random() < y;
};

class Ball {
  constructor({ x, y, r, cellWidth, cellHeight, rowsCount }) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.rowsCount = rowsCount;

    this.sprite = new Particle(x, y, r);

    this.draw = this.sprite.draw.bind(this.sprite);
    this.moves = this.generateMoves();
    this.dx = 1;
    this.dy = 1;
  }

  generateMoves() {
    console.log(this.rowsCount);
    const moves = [];
    for (let i = 0; i < this.rowsCount; i++) {
      console.log(i);
      const sum = moves.reduce((prev, curr) => prev + curr, 0);
      const sumDir = sum >= 0 ? 1 : -1;
      const nextMove = isWon(Math.abs(sum)) ? sumDir : -sumDir;
      moves.push(nextMove);
    }

    return moves;
  }

  move() {
    console.log('move');
    const prevMove = Math.round(this.y / this.cellHeight);
    this.y += this.dy;
    const currentMove = Math.floor(this.y / this.cellHeight);
    this.x += this.dx * this.moves[currentMove];

    const x = this.moves
      .slice(0, currentMove)
      .reduce((prev, curr) => prev + curr, 0);

    console.log(prevMove, currentMove);
    if (prevMove !== currentMove) {
      console.log('hit');
      this.onBallHit(x, currentMove);
    }

    if (this.moves.length < currentMove + 1) {
      this.onBallDestroyed();
      return;
    }

    this.sprite.y = this.y;
    this.sprite.x = this.x;
  }
}

export default Ball;
