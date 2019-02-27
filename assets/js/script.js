//When Enter is Pressed, we save input and append it to UL
$("input[type = 'text']").on("keypress", function(e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
    }
});

//Strike through when you click on To-Do
$('ul').on("click", "li", function() {
    $(this).toggleClass("markOff");
});

//Delete the to-do when you click on the trash can
$('ul').on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation(); // stops the event bubble what will cascade 
});