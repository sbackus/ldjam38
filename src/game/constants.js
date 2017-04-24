const WORLDHEIGHT = 665;
const WORLDWIDTH = 1375;

let preloadAll = (list) => {
  list.forEach((element) => {
    element.preload();
  })
}

let createAll = (list) => {
  list.forEach((element) => {
    element.create();
  })
}

let updateAll = (list) => {
  list.forEach((element) => {
    element.update();
  })
}

let softOverlap = (thisSprite, otherSprite) => {
  return otherSprite.getBounds().contains(thisSprite.x, thisSprite.y)
}

let toggle = (target) => {
  target.on = !target.on
}

let goToLevel2 = () => {
  text = game.add.text(game.world.centerX, game.world.centerY, "Good Job!", { font: "65px Arial", fill: "#232354", align: "center" });
  text.anchor.setTo(0.5, 0.5);
  setTimeout(function(){game.state.start("Level2")}, 1000);
}
