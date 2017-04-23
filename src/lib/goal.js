class Goal {
  constructor(starting_x, starting_y) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
  }

  preload() {
    game.load.spritesheet('goal', "assets/Tiles/goal1.png",186,186);

  }

  create() {
    this.sprite = game.add.sprite(this.starting_x, this.starting_y, 'goal');
    this.sprite.animations.add('pulse');
    this.sprite.animations.play('pulse', 8, true);
  }

  update() {
  }
}
