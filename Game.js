class Game {
  constructor() {
    this.player = new Player(30, 50, 'red');
  }

  update(deltaTime) {
    this.player.update();
  }

  draw(ctx) {
    this.player.draw(ctx);
  }
}
