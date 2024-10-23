$(document).ready(function () {
    $("#modal_social_networks, #main_card, footer, #sld1, #sld2, #sld3, #sld4").hide();

    $("#sld1").delay(4000).show(2000);
    $("#sld2").delay(6000).show(2000);
    $("#sld3").delay(12000).show(2000);
    $("#sld4").delay(14000).show(0);

    $("#sld4").on("click", function () {
        $("#welcome_card_term").fadeIn(1000).hide(0);
        $("#main_card").fadeIn(2000).show(0);
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
