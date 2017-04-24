class Background {
  constructor() {
  }

  preload() {
    game.load.image('background', 'assets/Background.png');
  }

  create() {
    this.sprite = game.add.sprite(0, 0, 'background');
  }

  update() {

  }
}
