class Wall {
  constructor(starting_x, starting_y, starting_width, starting_height) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.starting_width = starting_width;
    this.starting_height = starting_height;
    this.on = true;
  }

  preload() {
    game.load.image('wall', 'assets/Tiles/metal.png');
  }

  create() {
    this.sprite = game.add.tileSprite(this.starting_x, this.starting_y, this.starting_width, this.starting_height, 'wall');
    this.sprite.scale.x *= 0.5
    this.sprite.scale.y *= 0.5
  }

  update() {
    if(this.on){
      this.sprite.alpha = 1
    }
    else{
      this.sprite.alpha = 0
    }
  }
}
