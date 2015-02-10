var CrazyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<div class="crazydancer shake shake-crazy shake-constant"></div>');
  Dancer.apply(this, arguments);
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.bind(this)();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
};
