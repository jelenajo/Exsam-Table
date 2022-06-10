$(document).ready(function(){
    $(".header").css(
        "background-color", "gray"
    );

});
$(document).ready(function(){
    $(".odd>td:nth-child(odd)").css(
        "background-color", "#c2c2a3"//Odd neparan element
    );
});
$(document).ready(function(){
    $(".odd>td:nth-child(even)").css(
        "background-color", "#cccc99"     //EVEN PArni elemnt

    );
});
$(document).ready(function(){
    $(".even>td:nth-child(3n - 2)").css(
        "background-color", "red"
    )
    $(".even>td:nth-child(2)").css(
        "background-color", "#ffb3b3"
    )
    $(".even>td:nth-child(3)").css(
        "background-color", "#ffbf80"
    )
    $(".even>td:nth-child(5)").css(
        "background-color", "#4d2600"
    )
 
});
$(document).ready(function(){
    $(".title>td:nth-child(n+2)").css(
        "background-color", "#99ff66"
    )
    $(".title>td:first-child").css (
        "background-color", "#99ffcc"
    )

});
$(document).ready(function(){
    $(".clas>td:nth-child(n+3)").css(
        "background-color", "#d966ff"
    )
    $(".clas>td:nth-child(-n+2)").css(
        "background-color", "#e6ffff"
    )

});
$(document).ready(function(){
    
    $("#c>td:nth-child(-n+3)").css(
        "background-color", "#ffff4d"
    )
    $("#c>td:nth-child(n+4)").css(
        "background-color", "#ffffb3"
    )
});
$(document).ready(function(){
    $(".header").hover(function(){
      $(this).css("background-color", "#ccfff5");
      }, function(){
      $(this).css("background-color", "#00bfff");
    });
  });
$(document).ready(function(){
    $(".odd").hover(function(){
     $(".tekst").show(5000);
     $(".tekst").hide(7000);
    });
});


  $(document).ready(function(){
    $("#c>td:nth-child(n+2)").hover(function(){
      $(this).css("background-color", "#ccfff5");
      }, function(){
      $(this).css("background-color", "#00bfff");
    });
  });
  $(document).ready(function(){
     $(".even>td:nth-of-type(n+3)").hover(function(){
        $(this).css("background-color", "yellow");
     }, function(){
        $(this).css("background-color", "gray");
     });
  });
  $(document).ready(function(){
     $(".title>td:nth-child(n+3)").animate({
       width: "50px",
       height: "80px",
       opacity: "0.6",
    
     }, 1000);
  });
  $(document).ready(function(){
    $(".clas>td:nth-of-type(-n+2)").hover(function(){
     $(this).css(
        "backround-color", "#ff4da6"
     );
    }, function(){
        $(this).css(
            "background-color", "#aa00ff"
        )
    });
  });
  $(document).ready(function(){
    $(".clas>td:nth-of-type(-n+3)").hover(function(){
     $(this).css(
        "backround-color", "#ff4da6"
     );
    }, function(){
        $(this).css(
            "background-color", "#aa00ff"
        );
    });
  });