// for smooth scrolling to page sections
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1200
        );
        return false;
      }
    }
  });
});

$(document).ready(function () {
  // Tells the function to wait to preform until everything on the page has loaded.
  $(window).scroll(function () {
    // Says this function is preformed continuisly while scrolling.
    var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
      SectionOneOffset = $("#home").offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
      SectionTwoOffset = $("#about").offset().top;
    SectionThreeOffset = $("#services").offset().top;
    SectionFourOffset = $("#portfolio").offset().top;
    // SectionFiveOffset = $("#free").offset().top;
    SectionSixOffset = $("#contact").offset().top;

    if (Scroll >= SectionOneOffset) {
      // If you have scrolled past section one do this.
      $(".one").addClass("active-menu-item"); // Adds class of active-menu-item to the menu item with a class of menu-item-1
    } else {
      // If you have not scrolled section one do this.
      $(".one").removeClass("active-menu-item"); // Removes class of active-menu-item to the menu item with a class of menu-item-1
    }
    if (Scroll >= SectionTwoOffset) {
      $(".two").addClass("active-menu-item");
      $(".one").removeClass("active-menu-item");
    } else {
      $(".two").removeClass("active-menu-item");
    }
    if (Scroll >= SectionThreeOffset) {
      $(".three").addClass("active-menu-item");
      $(".two").removeClass("active-menu-item");
    } else {
      $(".three").removeClass("active-menu-item");
    }
    if (Scroll >= SectionFourOffset) {
      $(".four").addClass("active-menu-item");
      $(".three").removeClass("active-menu-item");
    } else {
      $(".four").removeClass("active-menu-item");
    }
    // if (Scroll >= SectionFiveOffset) {
    //   $(".five").addClass("active-menu-item");
    //   $(".four").removeClass("active-menu-item");
    // } else {
    //   $(".five").removeClass("active-menu-item");
    // }
    if (Scroll >= SectionSixOffset) {
      $(".six").addClass("active-menu-item");
      $(".four").removeClass("active-menu-item");
    } else {
      $(".six").removeClass("active-menu-item");
    }
  });
});

// Email Validation
function validateForm() {
  document.getElementById("status").innerHTML = "Sending...";
  formData = {
    name: $("input[name=name]").val(),
    email: $("input[name=email]").val(),
    subject: $("input[name=subject]").val(),
    message: $("textarea[name=message]").val(),
  };

  $.ajax({
    url: "mail.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {
      $("#status").text(data.message);
      if (data.code)
        //If mail was sent successfully, reset the form.
        $("#contact-form")
          .closest("form")
          .find("input[type=text], textarea")
          .val("");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $("#status").text(jqXHR);
    },
  });
}

// Subscription Email Validation
function validateSubForm() {
  document.getElementById("status").innerHTML = "Sending...";
  formData = {
    email: $("input[name=email]").val(),
  };

  $.ajax({
    url: "subscription.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {
      $("#status").text(data.message);
      if (data.code)
        //If email address was sent successfully, reset email field.
        $("#subscription-email")
          .closest("form")
          .find("input[type=text]")
          .val("");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $("#status").text(jqXHR);
    },
  });
}
