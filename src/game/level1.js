let level1 = function(game){};
let alien = new Alien(220, 100, {x: 1, y: -1});
let floorSection1 = new FloorSection(450, 0, 100, 800, 'Green');
let floorSection2 = new FloorSection(900, 0, 100, 800, 'Blue');
let wall1 = new Wall(150, 0, 4000, 70);
let wall2 = new Wall(150, 0, 70, 2000);
let wall3 = new Wall(WORLDWIDTH-35, 0, 70, 2000);
let wall4 = new Wall(150, WORLDHEIGHT-35, 4000, 70);
let switch1 = new Switch('greenButton', 0, 0, 'assets/Items/buttonGreen_pressed.png', 'assets/Items/buttonGreen.png', true, false, toggle.bind(this, floorSection1));
let switch2 = new Switch('blueSwitch', 200, 412, 'assets/Items/switchLeft.png', 'assets/Items/switchRight.png', false, true, toggle.bind(this, floorSection2));
let aliens;
let floorSections;
let walls;
let switches;
let goal = new Goal(1150,450);

level1.prototype = {
  preload: function(){
    game.load.audio('bgm', ['assets/Sound/Rainbow_Run.mp3']);
    game.load.audio('goal_sfx', ['assets/Sound/goal_sfx.mp3']);
    aliens = [alien];
    floorSections = [floorSection1, floorSection2];
    walls = [wall1, wall2, wall3, wall4];
    switches = [switch1, switch2];
    preloadAll(aliens);
    preloadAll(floorSections);
    preloadAll(walls);
    preloadAll(switches);
    goal.preload();
    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    let music = game.add.audio('bgm');
    music.loop = true;
    music.volume = 0.3;
    music.play();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    createAll(aliens);
    createAll(floorSections);
    createAll(walls);
    createAll(switches);
    goal.create();
  },
  update: function() {
    updateAll(aliens);
    updateAll(floorSections);
    updateAll(walls);
    updateAll(switches);
    goal.update();
    if (alien.sprite.overlap(goal.sprite)){
      this.game.state.start('Level2')
    }
  }
}
