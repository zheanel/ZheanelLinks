$(document).ready(function () {
  $(
    "#modal_social_networks, #main_card, footer, #sld1, #sld2, #sld3, #sld4"
  ).hide();
  $("#welcome_card_term").removeClass("invisible");
  $("#sld1").delay(5000).show(1500);
  $("#sld2").delay(8000).show(1500);
  $("#sld3").delay(10000).show(1500);
  $("#sld4").delay(12000).show(0);
  

  $("#sld4").on("click", function () {
    $("#welcome_card_term").fadeIn(1000).hide(0);
    $("footer").fadeIn(2000).show(0);
    $("#main_card").removeClass("invisible");
    $("#modal_social_networks").removeClass("invisible");
    $("#main_card").fadeIn(2000).show(0);
    birthday();
  });

  $("#show_social_networks").on("click", function () {
    $("#main_card").fadeOut(1000).hide(0);
    $("#modal_social_networks").fadeIn(2000).show(0);
  });

  $("#gotoMain").on("click", function () {
    $("#modal_social_networks").fadeOut(1000).hide(0);
    $("#main_card").fadeIn(2000).show(0);
  });
});


function birthday() {
  // Birthday Reminder!
  const todayDate = new Date();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();

  const birthdayD = 10;
  const birthdayM = 2;

  if (todayMonth === birthdayM && todayDay === birthdayD) {
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show();
  }

}

