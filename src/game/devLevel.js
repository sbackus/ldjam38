let devLevel = function(game){};


devLevel.prototype = {
  aliens: [],
  floorSections: [],
  walls: [],
  levers: [],
  goal: null,
  preload: function(){
    let alien = new Alien(215, 215);
    let alien2 = new Alien(250, 250, {x: 1, y: -1});
    let floorSection1 = new FloorSection(150, 0, 200, 800, 'Green');
    let floorSection2 = new FloorSection(400, 0, 200, 600, 'Blue');
    let wall1 = new Wall(150, 0, 4000, 70);
    let wall2 = new Wall(150, 0, 70, 2000);
    let wall3 = new Wall(WORLDWIDTH-35, 0, 70, 2000);
    let wall4 = new Wall(150, WORLDHEIGHT-35, 4000, 70);
    let goal = new Switch('goal1', 1050, 450, 'assets/Tiles/goal1.png', '', false, true, true, goal);
    aliens = [alien, alien2];
    floorSections = [floorSection1, floorSection2];
    walls = [wall1, wall2, wall3, wall4];
    preloadAll(aliens);
    preloadAll(floorSections);
    preloadAll(walls);
    goal.preload();
    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    createAll(aliens);
    createAll(floorSections);
    createAll(walls);
    goal.create();
  },
  update: function() {
    updateAll(aliens);
    updateAll(floorSections);
    updateAll(walls);
    goal.update();
  }
}
