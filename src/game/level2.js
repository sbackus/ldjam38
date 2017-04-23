var level2 = function(game){};
var lvl2_background = new Background();

level2.prototype = {
  preload: function(){
    lvl2_background.preload();
  },
  create: function(){
    lvl2_background.create();
    text = game.add.text(game.world.centerX, game.world.centerY, "Level 2!", { font: "65px Arial", fill: "#232354", align: "center" });
    text.anchor.setTo(0.5, 0.5);
  },
  update: function() {

  }
}
