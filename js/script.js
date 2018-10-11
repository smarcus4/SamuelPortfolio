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



//function that cycles through different greetings on 2 second intervals, fading in and out every 400 milliseconds.
$(function (){

    count = 0;
    var greetingArr = ["Hello", "Shalom","Hola","Namaste","Ciao"];
    setInterval(function (){
        count ++;
        console.log(count);
        $(greetingText).fadeOut(400, function(){
            $(this).text(greetingArr[count % greetingArr.length]).fadeIn(400);

        })
    },5000)
})








// $(greetingText).html(randomGreeting);






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

$('#projectBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#myProjects").offset().top
    }, 500);
    
});




