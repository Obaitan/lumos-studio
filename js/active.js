// for smooth scrolling to page sections
// $(function () {
//     $('a[href*="#"]:not([href="#"])').click(function () {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1750);
//                 return false;
//             }
//         }
//     });
// });


// To open and close sidebar
let sideBarOpen = false;
function openNav() {
    sideBarOpen = true;
    document.getElementById("nav").style.width = "275px";
}

function closeNav() {
    sideBarOpen = false;
    document.getElementById("nav").style.width = "0px";
}

// Closing sidebar by menu item clicks and by clicking outside sidebar
// $(function () {
//     $(".nav-link").on('click', function (event) {
//         event.stopPropagation();
//         event.stopImmediatePropagation();
//         closeNav();
//     });

//     $(".main").on('click', function (event) {
//         closeNav();
//     });
// });








