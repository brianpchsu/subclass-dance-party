var LakituDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<img src="lib/res/lakitu.gif" id="lakitu" class="lakituDancer shake shake-crazy">');
  // Add mouse over events
  this.$node.mouseenter(function(){
    this.grow.bind(this)();
  }.bind(this));

  this.$node.mouseleave(function(){
    this.shrink.bind(this)();
  }.bind(this));
  Dancer.apply(this, arguments);
};

LakituDancer.prototype = Object.create(Dancer.prototype);
LakituDancer.prototype.constructor = LakituDancer;

LakituDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
      Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};


LakituDancer.prototype.grow = function() {
  this.$node.width("60px");
  this.$node.height("100px");
}

LakituDancer.prototype.shrink = function() {
  this.$node.width("30px");
  this.$node.height("50px");
}
