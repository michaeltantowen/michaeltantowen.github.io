function introAnimation() {
  $("#title h1").velocity("transition.slideLeftIn", {
    duration: 1500, stagger: 250,
    complete: function() {
      buttonAnimation();
    }
  });
};

function buttonAnimation() {
  $("#btn-profile").velocity("transition.bounceDownIn", {
    duration: 1000
  });
  // Hover Effect Using velocity.js
  // $("#btn-profile").velocity("transition.bounceUpIn", {
  //   duration: 1000
  // }).mouseenter(function() {
  //   $(this).velocity("callout.flash");
  // }).mouseleave(function() {
  //   $(this).velocity("callout.flash");
  // });
};

function buttonClicked() {
  $("#btn-profile").velocity("transition.flipBounceYOut", {
    duration:1000,
    complete: function() {
      $("#title").html("Michael Tantowen").velocity({
        "font-size":"20px", "top":"4%", "left":"8%"},
        {duration:800,
         complete: function() {
           showMenu();
           $("#menu ul li a[href='profile']").trigger("click");
         }
        }
      )}
  })
};

function showMenu() {
	$("#menu ul li").velocity("transition.slideRightIn", {
		stagger: 350,
	});
	$("#menu ul li a").click(function (event) {
    // preventDefault untuk mencegah terjadinya default yaitu A
    // yang selalu membuka pages baru ketika di klik
    event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");

		var hrefString = $(this).attr("href");
    if(!$("#" + hrefString).is(":visible")) {
      $(".container-content").fadeOut(1000);
      setTimeout(function() {
        $("#" + hrefString).show();
        window[hrefString]();
      }, 1000);
    }
	});
}


function profile() {
  $("#profile").velocity("transition.flipYIn", {
    duration: 1500
  });
};

function project() {
  $("#project").velocity("transition.flipYIn", {
    duration: 1500,
    stagger: 1000
  });
};

$(document).ready(function() {
  introAnimation();
});