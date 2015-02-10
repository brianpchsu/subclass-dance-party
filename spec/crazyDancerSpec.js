describe("crazyDancer", function() {

  var crazyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyDancer = new CrazyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(crazyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node go crazy", function() {
    sinon.spy(crazyDancer.$node, 'toggle');
    crazyDancer.step();
    expect(crazyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(crazyDancer, "step");
      expect(crazyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crazyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crazyDancer.step.callCount).to.be.equal(2);
    });
  });
});
