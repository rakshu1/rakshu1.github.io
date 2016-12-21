    var height=$('.port_header').height();
    $(window).scroll(function() {
if ($(this).scrollTop() > height){  
    $('.nav-desktop.navbar.navbar-default').addClass("sticky");
  }
  else{
    $('.nav-desktop.navbar.navbar-default').removeClass("sticky");
  }
});


$(".apst-wrapper").hide();
    $(document).scroll(function() {
    var main = $(this).scrollTop();

        if (main >= 330) {
            $(".apst-wrapper").show();
        } else {
            $(".apst-wrapper").hide();

        }
        if (($(document).height() - $(window).height()) - $(document).scrollTop() <= 123) {

            $(".apst-wrapper").css({
                "right": "4px",
                "bottom": "-43px",
                "position": "absolute"
            });
        } else {
            $(".apst-wrapper").css({
                "right": "20px",
                "bottom": "20px",
                "position": "fixed"
            });
        }
        });
    $('.nav-scroll-up').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
   
        $('html,body').animate({scrollTop: 0}, 2000);
       
    $(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }