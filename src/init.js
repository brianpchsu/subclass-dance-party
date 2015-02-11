$(document).ready(function(){
  window.dancers = [];

  // Event handler: addDancerButton 'click'
  // This will add a dancer when the respective button was pressed
  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * getRandomArbitrary(0.65, 0.9),
      $("body").width() * getRandomArbitrary(0.05, 0.95),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // Event handler: addFlyingDancer 'click'
  // This will add a flying dancer to the window when triggered
  $(".addFlyingDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("flyingdancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * getRandomArbitrary(0.1, 0.3),
      $("body").width() * getRandomArbitrary(0, 0.9),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // Event handler: lineUp 'click'
  // This event is triggered when we want to line all the dancers up
  $(".lineUp").on("click", function(event) {
    var top, left;
    var windowWidth = $( "body" ).width();
    var windowHeight = $( "body" ).height();

    for(var i = 0; i < window.dancers.length; i++){
      top = (windowHeight*0.65) + i*5;
      left = (windowWidth*0.85) - i*20;
      if(left <= 0)
        left = 0;
      window.dancers[i].lineUp(top, left);
    }
  });

  // Event handler: goBack 'click'
  // This event is triggered when we want all the dancers
  // to return to their original positions
  $(".goBack").on("click", function(event) {
    for(var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      dancer.setPosition(dancer.top, dancer.left);
    }
  });

// Used to create dancers within a certain bounds (on the ground)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

});

