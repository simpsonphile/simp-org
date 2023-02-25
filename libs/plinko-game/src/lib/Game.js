import Ball from './Ball';
import GameLoop from './GameLoop';
import Scene from './Scene';
import Net from './Net';
import Multiplicators from './Multiplicators';

const getConfig = ({
  rowsCount = 16,
  startsFrom = 3,
  w = 600,
  h = 300,
  p = 20,
}) => ({
  rowsCount,
  startsFrom,
  w,
  h,
  p,
  cellCount: (rowsCount + startsFrom) * 2 + 1,
  cellWidth: w / ((rowsCount + startsFrom) * 2 + 1),
  cellHeight: h / rowsCount,
});

class Game {
  constructor({ element, width, height }) {
    this.config = getConfig({
      w: width,
      h: height,
    });
    this.net = new Net(this.config);
    this.footer = new Multiplicators({
      width: this.config.w,
      count: this.config.rowsCount,
    });
    this.scene = new Scene({ element, ...this.config });
    this.gameLoop = new GameLoop(30, this.scene.draw.bind(this.scene));
    this.gameLoop.animate();

    this.scene.add(this.net);
    // this.scene.add(this.footer);

    this.balls = [];
  }

  play() {
    const ball = new Ball({
      x: this.config.w / 2,
      y: 0,
      r: 8,
      cellHeight: this.config.cellHeight,
      cellWidth: this.config.cellWidth,
      cellCount: this.config.cellCount,
      rowsCount: this.config.rowsCount,
    });

    this.scene.add(ball);

    const interval = setInterval(() => {
      ball.move();
    }, 20);

    const onBallDestroyed = () => {
      console.log('on ball destoryed');
      clearInterval(interval);
    };

    const onBallHit = (x, y) => this.net.hit(x, y);

    ball.onBallDestroyed = onBallDestroyed;
    ball.onBallHit = onBallHit;
  }
}

export default Game;
