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
    var whoamI = ["an aspiring pilot", "an astronomer","a cyclist","an advocate for well being","a musician", "a full stack web developer"]
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


    

})
// JAVASCRIPT


$(jsButton).on("click", function(event){

    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.fadeIn(300).removeClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.addClass("hidden");


    

})
// NODE EXPRESS


$(nodeButton).on("click", function(event){
   

    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.fadeIn(300).removeClass("hidden");
    dbContainer.addClass("hidden");


    
})
// DATABASE


$(dbButton).on("click", function(event){
   
    event.preventDefault();
    htmlContainer.addClass("hidden");
    jsContainer.addClass("hidden");
    nodeContainer.addClass("hidden");
    dbContainer.fadeIn(300).removeClass("hidden");
    $(this).addClass("active");


})



//lets a button be active for when we input data?

var header = document.getElementById("projectDiv");
var btns = header.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}