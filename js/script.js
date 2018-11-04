// load in effects for canvas
$("#hello").addClass("animated fadeIn");
$("#myName").addClass("animated fadeIn delay-.5s");
$("#canvasMe").addClass("animated fadeIn delay-1s");
$("#info").addClass("animated fadeIn delay-2s");
$("#canvasBtn").addClass("animated fadeIn delay-2s");

//array for different greetings to be appended.
// var greetingArr = ["Hello", "Shalom","Hola","Namaste","Ciao"]
// var randomGreeting = greetingArr[Math.floor(Math.random()*greetingArr.length)];


//var greetingText get span element by id
var greetingText = $("#introText");
var meOne = $("#info");

var introText = $("#introText");

$(introText).html("Hello");



//function that cycles through different greetings on 2 second intervals, fading in and out every 400 milliseconds.
// $(function (){

//     count = 0;
//     var greetingArr = ["Hello", "Shalom","Hola","Namaste","Ciao"];
//     setInterval(function (){
//         count ++;
//         console.log(count);
//         $(greetingText).fadeOut(400, function(){
//             $(this).text(greetingArr[count % greetingArr.length]).fadeIn(400);

//         })
//     },4000)
// })


$(function (){

    counter = 0;
    var whoamI = ["an aspiring pilot", "an astronomer","a cyclist","an advocate for well being","a musician", "a full stack web developer"]
    setInterval(function (){
        if(counter<=5){

            $(meOne).fadeOut(100, function(){
                $(this).text("I am "+whoamI[counter]).fadeIn(100);
                counter ++;

                
            });
        }
    },1900)
})


function navFunction() {
    var x = document.getElementById("mainNav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}





// $(greetingText).html(randomGreeting);






//rotate the arrow on canvas
$('.btn-lg').hover(function () {
    $(this).children('#arrow').toggleClass('down');
});

// SMOOTH SCROLL FROM CANVAS HOME TO SKILLS
$('#canvasBtn').click(function(){
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $("#skills").offset().top
    }, 500);
    
    
});

$('#skillsBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#skills").offset().top
    }, 500);
    
});

$('#arrowHome').click(function(){

    $('html, body').animate({
    scrollTop: $("#cover").offset().top
    }, 500);
    
});

$('#homeBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#cover").offset().top
    }, 500);
    
});

$('#contactBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#contact").offset().top
    }, 500);
    
});

$('#projectBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#myProjects").offset().top
    }, 500);
    
});

$('#hobbiesBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#hobbies").offset().top
    }, 500);
    
});

// END SMOOTH SCROLL FROM CANVAS HOME TO SKILLS


// PROJECT SHUFFLE DIV CODE
const htmlContainer = $(".htmlContent");
const htmlButton = $("#htmlLink");
const jsContainer = $(".javascriptContent");
const jsButton = $("#jsLink");
const nodeContainer = $(".nodeContent");
const nodeButton = $("#nodeLink");
const dbContainer = $(".databaseContent");
const dbButton = $("#dataLink");

$(htmlButton).on("click", function(event){
   
    event.preventDefault();
    htmlContainer.fadeIn(300).removeClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.addClass("hidden");
    $(this).fadeIn(300).addClass("activeProject");
    $(this).fadeIn(300).removeClass("btns");
    jsButton.addClass("btns");
    nodeButton.addClass("btns");
    dbButton.addClass("btns");


    

})
// JAVASCRIPT


$(jsButton).on("click", function(event){

    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.fadeIn(300).removeClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.addClass("hidden");
    $(this).fadeIn(300).addClass("activeProject");
    $(this).fadeIn(300).removeClass("btns");
    htmlButton.addClass("btns");
    nodeButton.addClass("btns");
    dbButton.addClass("btns");

    

})
// NODE EXPRESS


$(nodeButton).on("click", function(event){
   

    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.fadeIn(300).removeClass("hidden");
    dbContainer.addClass("hidden");
    $(this).fadeIn(300).addClass("activeProject");
    $(this).fadeIn(300).removeClass("btns");
    jsButton.addClass("btns");
    htmlButton.addClass("btns");
    dbButton.addClass("btns");


    
})
// DATABASE


$(dbButton).on("click", function(event){
   
    event.preventDefault();

    htmlContainer.addClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.fadeIn(300).removeClass("hidden");
    $(this).fadeIn(300).addClass("activeProject");
    $(this).fadeIn(300).removeClass("btns");
    jsButton.addClass("btns");
    nodeButton.addClass("btns");
    htmlButton.addClass("btns");





})



//lets a button be active for when we input data?




// SCROLL FOR NAVIGATION
const navBar= $(".navBar")
$(navBar).addClass("hidden");







//ALLOWS NAV TO CHANGE TO ACTIVE CLASS ON SCROLL AND ON CLICK

$(document).ready(function() {

    const screen = $(window);  

    if (screen.width < 768) {
        $(navBar).removeClass('hidden');
        $(navBar).fadeIn(600);
    } else if(screen.width > 768) {
        $('.navBar').addClass('hidden');
        $(navBar).fadeOut(600);

    }
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {

    if($(window).width() >0){

        var scrollDistance = $(window).scrollTop();

        // if ($(window).scrollTop() > 730) {
        //     $(navBar).fadeIn(300).removeClass("hidden");
        //     // $(navBar).addClass("navBarScroll"); 
        
        // }

        // Show/hide menu on scroll
        if (scrollDistance >= 700) {
                $(navBar).fadeIn(300).removeClass("hidden");
                // $(navBar).addClass("navBarScroll");

        } else if($(window).width() <700){
            $(navBar).removeClass("hidden");
        }else{
            $(navBar).addClass("hidden");

        }

        // Assign active class to nav links while scolling
        $('section').each(function(i) {
                if ($(this).position().top <= scrollDistance +70) {
                        $('.navBar a.active').removeClass('active');
                        $('.navBar a').eq(i).addClass('active');
                }
        });
    }
}).scroll();


// HOBBY ON CLICK FUNCTIONALITY
const airplane = $(".airplane-div");
const telescope = $(".telescope-div");
const cycling = $(".cycling-div");
const piano = $(".piano-div");
const gaming = $(".videogames-div");

$("#airplane").on("click", function(e){
    airplane.removeClass("hidden").fadeIn(500);
    telescope.addClass("hidden");
    cycling.addClass("hidden");
    piano.addClass("hidden");
    gaming.addClass("hidden");
    e.preventDefault();

});
$("#telescope").on("click", function(){
    airplane.addClass("hidden");
    telescope.removeClass("hidden").fadeIn(500);
    cycling.addClass("hidden");
    piano.addClass("hidden");
    gaming.addClass("hidden");

});
$("#cycling").on("click", function(){
    airplane.addClass("hidden");
    telescope.addClass("hidden");
    cycling.removeClass("hidden").fadeIn(500);
    piano.addClass("hidden");
    gaming.addClass("hidden");

});
$("#piano").on("click", function(){
    airplane.addClass("hidden");
    telescope.addClass("hidden");
    cycling.addClass("hidden");
    piano.removeClass("hidden").fadeIn(500);
    gaming.addClass("hidden");

});
$("#videogames").on("click", function(){
    airplane.addClass("hidden");
    telescope.addClass("hidden");
    cycling.addClass("hidden");
    piano.addClass("hidden");
    gaming.removeClass("hidden").fadeIn(500);

});


// FORM SUBMISSION



$("#submitButton").on("click",function(e){

    const name = $(".name").val();
    const email = $(".email").val();
    const message = $(".message").val();    
    if(!name || !email || !message){

        console.log("error");
        alertify.error("Please fill out all entries! Thank you!");
        e.preventDefault();


    }else {

        // $(this).get(0).reset();
        alertify.success("Message was successfully sent! Thank you!");


    }


});



