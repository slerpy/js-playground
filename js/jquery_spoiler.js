//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user inte

//Prevent spoilerphobes from seeing spoilers
// 1, Hide spoiler
$(".spoiler span").hide();
// 2, Add a button
$(".spoiler").append("<button>Show Spoiler!</button>");
// 3, add button press event
$("button").click(function(){
    //3.1 show spoiler next to button clicked
    $(this).prev().show();
    $(".spoiler span").show();
    //3.2 get rid of button
    $(this).remove();

});




//Solution: Hide Spoilers