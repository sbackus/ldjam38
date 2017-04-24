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

let goal = () => {
  game.state.start('Level2')
}
