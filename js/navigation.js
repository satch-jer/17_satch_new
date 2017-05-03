$(".dropdown-button").on("click", function(){
    $("#dropdown-content").toggleClass("show");
    return false;
});

//hide menu when clicking on page
$("body").on("click", function(){
    $("#dropdown-content").removeClass("show");
});