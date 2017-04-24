var level0 = function(game){};


level0.prototype = {
  floorSections: [],
  gameObjects: [],
  walls: [],
  aliens: [],

  preload: function(){
    let go_to_level_1 = ()=>{
      text = game.add.text(game.world.centerX, game.world.centerY, "Good Job!", { font: "65px Arial", fill: "#232354", align: "center" });
      text.anchor.setTo(0.5, 0.5);
      setTimeout(function(){game.state.start("Level1")}, 1000);
    }
    let floorSection = new FloorSection(game.world.centerX, 0, 200, 800, 'Green');
    let wall1 = new Wall(150, 0, 4000, 70);
    let wall2 = new Wall(150, 0, 70, 2000);
    let wall3 = new Wall(WORLDWIDTH-35, 0, 70, 2000);
    let wall4 = new Wall(150, WORLDHEIGHT-35, 4000, 70);

    let mygoal = new Switch('goal1', 1050, 450, 'assets/Tiles/goal1.png', '', false, true, true, go_to_level_1);
    let alien = new Alien(215, 215, {x: 1, y: -1});
    let playerButtonPanel = new ButtonPanel(
      () => {},
      () => {floorSection.on = !floorSection.on},
      () => {},
      () => {}
    );
    walls = [wall1, wall2, wall3, wall4];
    floorSections = [floorSection];
    aliens = [alien];

    gameObjects = [floorSection, wall1, wall2, wall3, wall4, alien, playerButtonPanel, mygoal];
    preloadAll(gameObjects);
  },
  create: function(){
    createAll(gameObjects);
  },
  update: function() {
    updateAll(gameObjects);
  }
}
