var lib = lib||{};

(function (lib, cjs) {

var p; // shortcut to reference prototypes

(lib.WelcomeMovieClip = function(mode, startPosition, loop) {
  this.initialize(mode,startPosition,loop,{});

  var welcomeSound = function() {
    createjs.Sound.play('sound-pepi', createjs.Sound.INTERRUPT_EARLY, 0, 0, undefined);
  }

  // The timeline of significant events.
  var TIME_PEPI_ENTRANCE    = 16;             // Pepi makes his entrance onto the stage.
  var TIME_WELCOME = TIME_PEPI_ENTRANCE + 31; // Pepi makes his welcome speech.

  this.timeline.addTween(cjs.Tween.get(this).wait(TIME_WELCOME).call(welcomeSound).wait(40));

  var bubble = new SavvyParrot.Bubble("synched", 0, "Hey Brats!\nGet the hell off my island! Aawk!!");
  bubble.setTransform(684,167.5,1,1,0,0,0,216,92.5);
  bubble._off = true;
  var bubbleTween = cjs.Tween.get(bubble);
  bubbleTween.wait(TIME_WELCOME);
  bubbleTween.to({startPosition:0,_off:false},0);
  bubbleTween.wait(50);
  bubbleTween.to({_off:true},0);
  this.timeline.addTween(bubbleTween);

  var pepi = new SavvyParrot.Pepi();
  pepi.setTransform(-253.9,428.1,1,1,0,0,0,224.5,331.2);
  pepi._off = true;
  var pepiTween = cjs.Tween.get(pepi);
  // The following is Pepi moving into position on the stage.
  pepiTween.wait(TIME_PEPI_ENTRANCE).to({_off:false},0);
  var x = -238.4;
  var y =  426.9;
  for(i=0;i<32;i++) {
    var args = {'x': x, 'y': y};
    pepiTween.wait(1).to(args, 0);
    x += 14.932258;
    y -= 1.15483871;
  }
  this.timeline.addTween(pepiTween);

  var island = new SavvyParrot.Island();
  island.setTransform(525.5,384.4,1,1,0,0,0,525.5,384.4);
  var islandTween = cjs.Tween.get(island);
  islandTween.wait(1).to({regX:512,regY:384,scaleX:1.09,scaleY:1.09,x:542.6,y:391.5,alpha:0.98},0);
  this.timeline.addTween(islandTween);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);

})(lib, createjs);