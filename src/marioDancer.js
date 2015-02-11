var MarioDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<img src="lib/res/mario.gif" id=mario class="dancer">');

  this.$node.click(function(){
    this.$node.attr("src", "lib/res/marioClick.gif");
    this.goRight();
  }.bind(this));
  // Add mouse over events
  // this.$node.click(function(){
  //   if (!this.$node.toggleClass('yoshi')){
  //     this.getYoshi
  //   }
  //   this.grow.bind(this)();
  // }.bind(this));

  Dancer.apply(this, arguments);
};

MarioDancer.prototype = Object.create(Dancer.prototype);
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass('animated shake');
};


MarioDancer.prototype.goRight = function() {
  this.$node.animate({'left': this.left+500},1000, this.goLeft.bind(this));
}

MarioDancer.prototype.goLeft = function() {
  // Flip image
    this.$node.attr("src", "lib/res/marioClickFlipped.gif");
    this.$node.animate({'left': this.left},1000, function(){
      this.$node.attr("src", "lib/res/mario.gif");
    }.bind(this));
    // setTimeout(this.$node.toggleClass('yoshi').bind(this), 2000);
}
