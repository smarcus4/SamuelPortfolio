// load in effects for canvas
$("#hello").addClass("animated fadeIn");
$("#myName").addClass("animated fadeIn delay-1s");
$("#canvasMe").addClass("animated fadeIn delay-2s");
$("#info").addClass("animated fadeIn delay-3s");
$("#canvasBtn").addClass("animated fadeIn delay-3s");
$("#skillHeader").addClass("animated flash");

//array for different greetings to be appended.
// var greetingArr = ["Hello", "Shalom","Hola","Namaste","Ciao"]
// var randomGreeting = greetingArr[Math.floor(Math.random()*greetingArr.length)];


//var greetingText get span element by id
var greetingText = $("#introText");
var meOne = $("#info");



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
    },4000)
})


$(function (){

    counter = 0;
    var whoamI = ["a pilot", "an astronomer","a cyclist","an advocate for well being","a musician", "a full stack web developer"]
    setInterval(function (){
        if(counter<=5){

            $(meOne).fadeOut(100, function(){
                $(this).text("I am "+whoamI[counter]).fadeIn(100);
                counter ++;

                
            });
        }
    },2900)
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

    $('html, body').animate({
    scrollTop: $("#skills").offset().top
    }, 500);
    
});

$('#skillsBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#skills").offset().top
    }, 500);
    
});

$('#homeBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#cover").offset().top
    }, 500);
    
});

$('#projectBtn').click(function(){

    $('html, body').animate({
    scrollTop: $("#myProjects").offset().top
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

$(htmlButton).on("click", function(){
   
    event.preventDefault();
    htmlContainer.removeClass("hidden").fadeIn(500);
    jsContainer.addClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.addClass("hidden");
    return false;

    

})
// JAVASCRIPT


$(jsButton).on("click", function(){
    
    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.removeClass("hidden").fadeIn(500);
    nodeContainer.addClass("hidden");
    dbContainer.addClass("hidden");
    return false;

    

})
// NODE EXPRESS


$(nodeButton).on("click", function(){
   
    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.removeClass("hidden").fadeIn(500);
    dbContainer.addClass("hidden");
    return false;

    
})
// DATABASE


$(dbButton).on("click", function(){
   
    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.removeClass("hidden").fadeIn(500);
    return false;

})
