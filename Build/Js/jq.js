$(document).ready(function(){
  $(".signup-form").hide();
  $(".login-form").show();
    $(".login").css("background", "#303030");
    $(".signup").css("background", "#303030");
    $(".login").css("color","#008000");
    $(".login").css("fontWeight","700");
    $(".login").css("borderBottom","1px Solid #008000");

  $(".login").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("color","white");
  $(".login").css("color","#008000");
  $(".login").css("fontWeight","700");
  $(".signup").css("fontWeight","300");
  $(".signup").css("background", "#303030");
  $(".login").css("background", "#303030");
  $(".signup").css("borderBottom","0px");
  $(".login").css("borderBottom","1px Solid #008000");
  $(".login").css("transition","1s all");
  
});

  $(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login").css("color","white");
  $(".signup").css("color","#008000");
  $(".signup").css("fontWeight","700");
  $(".login").css("fontWeight","300");
  $(".login").css("background", "#303030");
  $(".signup").css("background", "#303030");
  $(".login").css("borderBottom","0px");
  $(".signup").css("borderBottom","1px Solid #008000");
  $(".signup").css("transition","1s all");
});

$(".btn").click(function(){
  $(".input").val("");
});
});





    var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});



