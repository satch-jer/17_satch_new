//lazy load for all images
$(function() {
    $("img.lazy").lazyload({
        effect : "fadeIn",
        treshold: -500
    });
});