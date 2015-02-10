var SlowDancer = function(top, left, timeBetweenSteps){
   this.$node = $('<span class="slowdancer"></span>');
  Dancer.apply(this, arguments);
};

SlowDancer.prototype = Object.create(Dancer.prototype);
SlowDancer.prototype.constructor = SlowDancer;

SlowDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.bind(this)();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};
