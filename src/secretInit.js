$(document).ready(function(){
  var peachGif = "lib/res/lol.gif";
  var secretTop  = $("body").height() * 0.285;
  var secretLeft = $("body").width() * 0.438;
  var styleSettings = {
      top: secretTop,
      left: secretLeft
    };
  // Move hidden button to star
  $(".secret").css(styleSettings);

  $(".secret").on("click", function(event) {
    var peaches = [];
    for(var i = 0; i < window.dancers.length;i++){
      if(window.dancers[i] instanceof PeachDancer){
        if(window.dancers[i].useSecret)
          window.dancers[i].useSecret = false;
        else
          window.dancers[i].useSecret = true;
      }
    }
  });
});


