class Alien {
  constructor(x, y, initialHeadings={x: 1, y: 1}) {
    this.x = x;
    this.y = y;
    this.axis = 'x';
    this.headings = initialHeadings;
  }

  preload() {
    game.load.atlasJSONHash('alien', 'assets/Player/p1_walk/p1_walk.png', 'assets/Player/p1_walk/p1_walk.json');
  }

  create() {
    this.sprite = game.add.sprite(this.x, this.y, 'alien');
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.animations.add('walk');
    this.sprite.animations.play('walk', 20, true);
    this.sprite.speed = 5;
    this.sprite.scale.x *= 0.5
    this.sprite.scale.y *= 0.5
    this.sprite.anchor.setTo(0.5,0.5);
  }

  update() {
    this.axis = this.check_floor_color();
    this.check_wall_collision();
    this.walk(this.axis);
  }

  walk(axis) {
    this.sprite[axis] += this.sprite.speed * this.headings[axis]
  }

  check_floor_color() {
    let newAxis = 'x';
    floorSections.forEach ((tile) => {
      if (tile.on && softOverlap(this.sprite, tile.sprite)) {
        if (tile.color === "Green") {
          newAxis = 'y';
        } else if (tile.color === "Blue") {
          newAxis = 'x';
          this.headings['x'] = -1;
          this.sprite.scale[this.axis] *= -1;
        }
      }
    });
    return newAxis;
  }

  check_wall_collision() {
    walls.forEach((tile) => {
      if (this.sprite.overlap(tile.sprite)) {
        this.headings[this.axis] *= -1;
        if (this.axis == 'x') {
          this.sprite.scale[this.axis] *= -1;
        }
      }
    });
  }
}
