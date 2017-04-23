var gameTitle = function(game){};

gameTitle.prototype = {
  preload: function(){
    this.game.load.image("play","assets/UI/greenstart.png");
  },
  create: function(){
    var playButton = this.game.add.button(game.world.width/2,320,"play",this.playTheGame,this);
    playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
    this.game.state.start("Level1");
  }
}
