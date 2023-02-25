class GameLoop {
  constructor(fps, draw) {
    this.fps = fps;
    this.then = Date.now();
    this.delta;
    this.now;
    this.interval = 1000 / this.fps;
    this.draw = draw;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {
      this.draw();

      this.then = this.now - (this.delta % this.interval);
    }
  }
}

export default GameLoop;
