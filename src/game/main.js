let game = new Phaser.Game(WORLDWIDTH, WORLDHEIGHT, Phaser.CANVAS, '', "game", true);
game.state.add("GameTitle",gameTitle);
game.state.add("Level0",level0);
game.state.add("Level1",level1);
game.state.add("Level2",level2);
game.state.add("DevLevel", devLevel);
game.state.start("Level1");

