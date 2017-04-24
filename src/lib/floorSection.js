class FloorSection {
  constructor(starting_x, starting_y, starting_width, starting_height, color) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.starting_width = starting_width;
    this.starting_height = starting_height;
    this.on = true;
    this.color = color;
    this.sprite;
  }

  preload() {
    game.load.spritesheet(this.color, "assets/Tiles/" + this.color.toLowerCase() + "_beam.png",150,1);
  }

  create() {
    this.sprite = game.add.tileSprite(this.starting_x, this.starting_y, this.starting_width, this.starting_height, this.color);
    this.sprite.animations.add('zap');
    this.sprite.animations.play('zap', 8, true);
  }

  update() {
    if(this.on){
      this.sprite.alpha = 1;
    }
    else{
      this.sprite.alpha = 0;
    }
  }
}
