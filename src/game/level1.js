let level1 = function(game) {};
let alien = new Alien(220, 100, { x: 1, y: -1 });
let floorSection1 = new FloorSection(450, 0, 150, 800, 'Green');
let floorSection2 = new FloorSection(900, 0, 150, 800, 'Blue');
let wall1 = new Wall(150, 0, 4000, 70);
let wall2 = new Wall(150, 0, 70, 2000);
let wall3 = new Wall(WORLDWIDTH - 35, 0, 70, 2000);
let wall4 = new Wall(150, WORLDHEIGHT - 35, 4000, 70);
let switch1 = new Switch('greenButton', 0, 0, 'assets/Items/buttonGreen_pressed.png', 'assets/Items/buttonGreen.png', true, false, false, toggle.bind(this, floorSection1));
let switch2 = new Switch('blueSwitch', 200, 560, 'assets/Items/switchLeft.png', 'assets/Items/switchRight.png', false, true, false, toggle.bind(this, floorSection2));
let playerButtonPanel = new ButtonPanel(
    () => {},
    () => { floorSection1.on = !floorSection1.on },
    () => { floorSection2.on = !floorSection2.on },
    () => {}
);
let aliens;
let floorSections;
let walls;
let switches;
let goal1 = new Switch('goal1', 1150, 40, 'assets/Tiles/goal1.png', '', false, true, true, goToLevel2);

level1.prototype = {
    preload: function() {
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
        goal1.preload();
        playerButtonPanel.preload();
        game.stage.backgroundColor = '#eee';
    },
    create: function() {
        let music = game.add.audio('bgm');
        music.loop = true;
        music.volume = 0.3;
        music.play();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        createAll(aliens);
        createAll(floorSections);
        createAll(walls);
        createAll(switches);
        playerButtonPanel.create();
        goal1.create();
    },
    update: function() {
        updateAll(aliens);
        updateAll(floorSections);
        updateAll(walls);
        updateAll(switches);
        playerButtonPanel.update();
        goal1.update();
    }
}
