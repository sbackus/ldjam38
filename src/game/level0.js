var level0 = function(game){};


level0.prototype = {
  floorSections: [],
  gameObjects: [],
  walls: [],

  preload: function(){
    let floorSection = new FloorSection(game.world.centerX, 0, 200, 800, 'Green');
    let wall1 = new Wall(150, 0, 4000, 70);
    let wall2 = new Wall(150, 0, 70, 2000);
    let wall3 = new Wall(WORLDWIDTH-35, 0, 70, 2000);
    let wall4 = new Wall(150, WORLDHEIGHT-35, 4000, 70);
    let switch1 = new FloorSwitch(0, 0, floorSection, 'Green');
    let goal = new Goal(game.world.width - 260, game.world.centerY);
    let alien = new Alien(215, 215);

    walls = [wall1, wall2, wall3, wall4];
    floorSections = [floorSection];

    gameObjects = [floorSection, wall1, wall2, wall3, wall4, alien, switch1, goal];
    preloadAll(gameObjects);
  },
  create: function(){
    createAll(gameObjects);
  },
  update: function() {
    updateAll(gameObjects);
  }
}
