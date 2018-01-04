// script.js



/*  -----------------------
    Simple Syntax of jQuery
    ----------------------- */
/*
$(function() {
    $("#box").fadeOut();
});

$(function() {
    $("h1").css("color","blue");
});



//call to jQuery

$(function() {
    $("button").click(function(){
        $("#box").fadeOut(1000);  //1000 ms
    });
}); 

*/



/*  -------------
      Selectors
    ------------- */
/*
$(function() {
    $('h2,h3,h4').css('border','solid 1px red');
    
    $('div#container').css('border','solid 1px green');
    
    $('p.lead').css('border','solid 1px blue');
    
    $('li:first').css('border','solid 1px yellow');
    
    $('p:even').css('border','solid 1px orange');
    
    $('div em').css('border','solid 1px black');
    
    $('div > p').css('border','solid 1px silver'); //just children
    
    $(':header').css('border','solid 1px purple');
    
    $(':contains("Charlie")').css('border','solid 1px grey');
    // $('div:contains("Charlie")').css('border','solid 1px blue'); even more specific
    
});   

*/

/*  -------------
    Event Methods
    ------------- */
$(function() {
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $('input').blur(function() {
       if( $(this).val() == "" ) {      //if 'this' (talking about specific input) input is empty
           $(this).css('border','solid 1px red');   //add some color
           $('#box').text('Forgot to add text?'); //change the text of box
       }
    
    });
    
    $('input').keydown(function() {
        if ($(this).val() !== "" ) {
            $(this).css('border', 'solid 1px #777');
            $('#box').text("Thanks for entering the text.");
        }
    });
    
    $('#box').hover(function() {
        $(this).text('You hovered in the box');
        
    }, function() {
        $(this).text('You hovered out of the box');
        
    });
    
    /*--------------------
        jQuery CHAINING
      --------------------*/
    $('.notification-bar').delay(1000).slideDown().delay(3000).fadeOut();
    
    
     /*--------------------
        jQuery CHAINING
      --------------------*/
    
    //$('h1').hide();
    //$('div.hidden').show();
    
    //$('p').fadeOut();

    $('#box1').click(function() {
        $(this).fadeTo( 2000, 0.25, function() {           //time (ms, opacity)
            //animation is complete
            
            $(this).slideUp();
        });
    });
            $('button').click(function() {
                $('#box1').slideToggle();
            });
    
    /*----------------
        ANIMATE
     ---------------*/
    
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",     //the = moves current position 40px more instead of once         
            fontSize: "+=2px"
        }, function() {
            //animation is complete
        });    
    });
  
       $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",     //the = moves current position 40px more instead of once         
            opactiy: "+=0.1"
        }, function() {
            //animation is complete
        });    
    });
    
       $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",     //the += moves current position 40px right instead of once       
            fontSize: "-=2px"
        }, function() {
            //animation is complete
        });    
    });
    
       $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",     //the = moves current position 40px more instead of once         
            opacity: "-=0.05"
        }, function() {
            //animation is complete
        });    
    });
    
    
     /*------------------
        jQuery with CSS
     ------------------*/
    
    $('#circle2').css({ 
        'display':'inline-block', 
        'background':'#8a8d22', 
        'color':'white', 
        'text-align':'center', 
        'line-height':'140px', 
        'height':'140px', 
        'width':'140px', 
        'margin':'40px'  
    }).addClass('circleShape');
    
  //  $('#circle2').addClass('circleShape');  might as well chain it above instead
    
    
    /*------------------
        Race Car
     ------------------*/
  
    $('#go').click(function() {
        
        //animate the Range Rover
        
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = '2nd';
            }
        }
        
        
        // get the width of the cars
        var carWidth = $('#car1').width();
        
        // get the width of the race track
        var raceTrackWidth = $(window).width() - carWidth;
        
        // generate a random # between 1 and 5000 (ms)
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );   //number b/n 1 and 5000
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
        
        // set a flag variable to FALSE by default (check to see if car finished race)
        var isComplete = false;
        
        // set a flag variable to FIRST by default
        var place = '1st';
        
        // animate car 1
        
        $('#car1').animate({
           //move the car the width of racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            //animation is complete
            
            //run the function from above
            checkIfComplete();
            
            //give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in: ' + place + ' Place with a time of: ' + raceTime1 + ' milliseconds' );
            
        });
        
        // animate the Chevy Trax
        
        // animate car 2
        
        $('#car2').animate({
           //move the car the width of racetrack
            left: raceTrackWidth
            
        }, raceTime2, function() {
            //animation is complete
            
            //run the function from above
            checkIfComplete();
            
            //give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in: ' + place + ' Place with a time of: ' + raceTime2 + ' milliseconds' );
            
        });  
    
    });        
    
    // reset 
    $('#reset').click(function() {
       $('.car').css('left','0');
       $('.raceInfo span').text('');
    });
    
    
    
    
    
    
});





