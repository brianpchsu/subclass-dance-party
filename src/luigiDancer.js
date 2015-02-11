var LuigiDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<img src="lib/res/luigi.gif" id="luigi" class="dancer">');
  Dancer.apply(this, arguments);
    // Add mouse over events
  this.$node.mouseenter(function(){
    this.grow.bind(this)();
  }.bind(this));

  this.$node.mouseleave(function(){
    this.shrink.bind(this)();
  }.bind(this));
};

LuigiDancer.prototype = Object.create(Dancer.prototype);
LuigiDancer.prototype.constructor = LuigiDancer;

LuigiDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
};

LuigiDancer.prototype.grow = function() {
  this.$node.width("100px");
  this.$node.height("100px");
}

LuigiDancer.prototype.shrink = function() {
  this.$node.width("50px");
  this.$node.height("50px");
}
