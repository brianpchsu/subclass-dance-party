describe("slowDancer", function() {

  var slowDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slowDancer = new SlowDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(slowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node slow", function() {
    sinon.spy(slowDancer.$node, 'toggle');
    slowDancer.step();
    expect(slowDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(slowDancer, "step");
      expect(slowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slowDancer.step.callCount).to.be.equal(2);
    });
  });
});
