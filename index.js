// adding event listeners
// changing the color
$(document).ready(function(){
    $("h1").click(function(){
        $("h1").css("color", "purple");
    })
})

//changing the text color using the buttons

$(document).ready(
    function(){
        $(".button1").click(
            function(){
                $("h1").css("color", "purple");
            }
        )
        $(".button2").click(
            function(){
                $("h1").css("color", "red");
            }
        )
        $(".button3").click(
            function(){
                $("h1").css("color", "yellow");
            }
        )
        $(".button4").click(
            function(){
                $("body").css("background-color", "black");
                $(".bulb").attr("src","bulb_on.png");
            })
            $(".button5").click(
                function(){
                    $("body").css("background-color", "white");
                    $(".bulb").attr("src","bulb_off.png");

        }
        )
    }
)



// //bulb on off
$(document).ready(
    function(){
        $(".button6").click(
            function(){
                $(".bulb").attr("src","bulb_on.png");
            }
        )
        $(".button7").click(
            function(){
                $(".bulb").attr("src","bulb_off.png");
            }
        )
    }
)
//getting the letters from input
$(document).ready(function(){
    $(document).keypress(function(event){
        $("h1").text(event.key); 
    });    
})

//appending and prepending
$(document).ready(function(){
    $("h1").before("<br><button>new</button>");
    $("h1").after("<button>old</button>");
    $("h1").prepend("<button>button new one</button>");
    $("h1").append("<button>button new one</button>");
})
//hiding the h1
// $(document).ready(function(){
//     $("h1").hide();
// })

$(document).ready(function(){
    $("button").click(function(){
        $("h1").css("color","blue"); 
    })
    $(".hide").on("click", function(){
        $(".hide").hide(); 
    })
})
$(document).ready(function(){
    $(".toggle").click(function(){
        $("h1").toggle();
    })
})

//fadein and out
$(document).ready(function(){
    $(".fadeout").on("click", function(){
        $("h1").fadeOut();
    })
})
//fadeIn 
$(document).ready(function(){
    $(".fadein").on("click", function(){
        $("h1").fadeIn();
    })
})
//fadeToggle
$(document).ready(function(){
    $(".fadetoggle").on("click", function(){
        $("h1").fadeToggle();
    })
    $(".fadetoggle").before("<br><br>");
})

//slide up down toggle
$(".slideup").before("<br>");
$(".slidedown").before("<br>");
$(".slidetoggle").before("<br>");

$(".slideup").on("click", function(){
    $("h1").slideUp();
})
$(".slidedown").on("click", function(){
    $("h1").slideDown();
})
$(".slidetoggle").on("click", function(){
    $("h1").slideToggle();
})


//animate 
$(".animate").on("click", function(){
    $("h1").slideDown().slideUp().animate({opacity: 0.5});
})