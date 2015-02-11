var PeachDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<img src="lib/res/peach.gif" id=peach class="dancer">');
  this.useSecret = false;
  // Add mouse over events
  this.$node.click(function(){
    this.attract.bind(this)();
  }.bind(this));

  Dancer.apply(this, arguments);
};

PeachDancer.prototype = Object.create(Dancer.prototype);
PeachDancer.prototype.constructor = PeachDancer;

//===== PeachDancer Methods =====

// Function: step()
// This function will cause the PeachDancer object to move
PeachDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.addClass('animated wobble');
};

// Function: lineUp(top, left)
// This function is called when the lineUp event is triggered
// Overridden Dancer.prototype.lineUp()
PeachDancer.prototype.lineUp = function(top, left){
  this.$node.attr("src", "lib/res/peach.gif");
  this.setPosition(top, left);
};

// Function: attract()
// This function will cause all marios currently in the window
// to gather around in a circle near peach.
// And maybe a little bit more
PeachDancer.prototype.attract = function() {
 // Find all marios, and all peaches
 var marios = [];
 var peaches = [];

 for(var i = 0; i < window.dancers.length;i++){
  if(window.dancers[i] instanceof MarioDancer){
    marios.push(window.dancers[i]);
  }
  if(window.dancers[i] instanceof PeachDancer){
    peaches.push(window.dancers[i]);
  }
 }

 // Only enter if there are marios in the window
 if(marios){
  var radians = 2 * Math.PI / marios.length; // Set the amount to jump around the circle for each mario

  // Set the marios in a circle around peach
  for(var i = 0; i < marios.length;i++){
    marios[i].setPosition(this.top + 50*Math.cos(i*radians), this.left + 50*Math.sin(radians*i));
  }

  // If the secret was triggered, do something special
  if(this.useSecret)
    this.$node.attr("src", "lib/res/lol.gif");
  else
    this.$node.attr("src", "lib/res/peachKiss.gif");

  this.$node.addClass("attractive");
 }

 // Only enter if there are peaches
 if(peaches){
  // Sets all the attractive peaches back to un-attractive
  for(var i = 0; i < peaches.length; i++){
    if(peaches[i].$node.hasClass("attractive") && peaches[i] !== this){
      peaches[i].$node.attr("src", "lib/res/peach.gif");
      peaches[i].$node.removeClass("attractive");
      peaches[i].setPosition(peaches[i].top, peaches[i].left);
    }
  }
 }
}
