// load in effects for canvas
$("#hello").addClass("animated fadeIn");
$("#myName").addClass("animated fadeIn delay-1s");
$("#canvasMe").addClass("animated fadeIn delay-2s");
$("#info").addClass("animated fadeIn delay-3s");
$("#canvasBtn").addClass("animated fadeIn delay-3s");
$("#skillHeader").addClass("animated flash");




//rotate the arrow on canvas
$('.btn-lg').hover(function () {
    $(this).children('#arrow').toggleClass('down');
});



// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById(".navBar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }