class ButtonPanel {
  constructor(q,w,e,r) {
    let nope = () => {
    }
    this.buttons={
      q: new PlayerButton(15, 10, "red", 'q', q || nope),
      w: new PlayerButton(15, 150, "green", 'w', w || nope),
      e: new PlayerButton(15, 290, "blue", 'e', e || nope),
      r: new PlayerButton(15, 500, "yellow", 'r', r || nope)
    }
  }

  preload() {
    game.load.image("buttonPanelBg", "assets/UI/button_panel_bg.png", 150, 70);
    for (let button in this.buttons) {
      this.buttons[button].preload();
    }
  }

  create() {
    this.sprite = game.add.tileSprite(0,0, 150, WORLDHEIGHT, 'buttonPanelBg');
    for (let button in this.buttons) {
      this.buttons[button].create();
    }
  }

  update() {
    for (let button in this.buttons) {
      this.buttons[button].update();
    }
  }
}
