//Get the scroll-to-top button
var mybutton = document.getElementById("top-btn");

// When the user scrolls down 450px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// // Menu Tracking
// $(document).ready(function () {

//     $(".nav-link").click(function () {
//         $(".nav-link").removeClass("active");
//         $(this).addClass("active");
//     });

// });








