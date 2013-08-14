(function(targetNS) {

var FarmhouseBitmap = function() {
  this.initialize(targetNS.images['img-farmhouse']);
};
FarmhouseBitmap.prototype = new createjs.Bitmap();
FarmhouseBitmap.prototype.nominalBounds = new createjs.Rectangle(0,0,1500,1201);

targetNS.Farm = function() {
  this.initialize();

  var bitmap = new FarmhouseBitmap();
  bitmap.setTransform(-511.9,-383.9,0.683,0.639);

  this.addChild(bitmap);
};

targetNS.Farm.prototype = new createjs.Container();
targetNS.Farm.prototype.nominalBounds = new createjs.Rectangle(-511.9,-383.9,1024,768);

})(SavvyParrot);
