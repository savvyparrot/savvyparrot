(function(targetNS, localName) {

var IslandBitmap = function() {
  this.initialize(SavvyParrot.images['img-island']);
};
IslandBitmap.prototype = new createjs.Bitmap();
IslandBitmap.prototype.nominalBounds = new createjs.Rectangle(0, 0, 1523, 1219);


var IslandContainer = function() {
  this.initialize();

  var bmpIsland = new IslandBitmap();
  bmpIsland.setTransform(-538.9,-384.9,0.672,0.63);

  this.addChild(bmpIsland);
};
IslandContainer.prototype = new createjs.Container();
IslandContainer.prototype.nominalBounds = new createjs.Rectangle(-538.9,-384.9,1024,768);

targetNS[localName] = function() {
  this.initialize();

  var c = new IslandContainer();
  c.setTransform(1051,769,1,1,0,0,0,512,384);
  this.addChild(c);
};

targetNS[localName].prototype = new createjs.Container();
targetNS[localName].prototype.nominalBounds = new createjs.Rectangle(0,0,1024,768);

})(SavvyParrot, "Island");
