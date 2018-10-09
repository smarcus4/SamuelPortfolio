// load in effects for canvas
$("#hello").addClass("animated fadeIn");
$("#myName").addClass("animated fadeIn delay-1s");
$("#canvasMe").addClass("animated fadeIn delay-2s");
$("#info").addClass("animated fadeIn delay-3s");
$("#canvasBtn").addClass("animated fadeIn delay-3s");
$("#skillHeader").addClass("animated flash");

//array for different greetings to be appended.
var greetingArr = ["Hello", "Shalom","Hola","Namaste","Ciao"]
var randomGreeting = greetingArr[Math.floor(Math.random()*greetingArr.length)];

//var greetingText get span element by id
var greetingText = $("#introText");
$(greetingText).html(randomGreeting);



//rotate the arrow on canvas
$('.btn-lg').hover(function () {
    $(this).children('#arrow').toggleClass('down');
});

// SMOOTH SCROLL FROM CANVAS HOME TO SKILLS
$('#canvasBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#skills").offset().top
    }, 500);
    
});



