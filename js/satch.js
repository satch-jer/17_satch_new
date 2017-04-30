$(function () {
    $('body').fadeIn(1200);

    //images lazyload
    $("img.lazy").lazyload({
        effect : "fadeIn",
        treshold: -500
    });

});