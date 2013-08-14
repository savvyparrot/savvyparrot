(function(targetNS, localName) {

targetNS[localName] = function(arg0, arg1, text) {
  this.initialize(arg0, arg1);

  // Layer 1
  this.text = new createjs.Text(text, "bold 36px Comic Sans MS");
  this.text.lineHeight = 38;
  this.text.lineWidth = 393;
  this.text.setTransform(12,0);

  this.shape = new createjs.Shape();
  this.shape.graphics.f("#33FF66").s().p("EglFgNzMBDnAISIGkQ2MhFWACfg");
  this.shape.setTransform(206.6,50.5);

  this.addChild(this.shape,this.text);
};

targetNS[localName].prototype = new createjs.Container();
targetNS[localName].prototype.nominalBounds = new createjs.Rectangle(-30.8,-37.9,474.9,177);

})(SavvyParrot, "Bubble");
