$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".plan").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });

    function updateHour() {
        var hour = moment().hours();
    
        $(".time-block").each(function() {
            var timeNow = parseInt($(this).attr("id").split("-")[1]);
    
            if (timeNow < hour) {
                $(this).addClass("past");
            } 
            else if (timeNow === hour) {
                $(this).removClass("past");
                $(this).addClass("present");
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    };
    
updateHour();

var interval = setInterval(updateHour, 15000);
$("hour8 .plan").val(localStorage.getItem("hour8"));
$("hour9 .plan").val(localStorage.getItem("hour9"));
$("hour10 .plan").val(localStorage.getItem("hour10"));
$("hour11 .plan").val(localStorage.getItem("hour11"));
$("hour12 .plan").val(localStorage.getItem("hour12"));
$("hour13 .plan").val(localStorage.getItem("hour13"));
$("hour14 .plan").val(localStorage.getItem("hour14"));
$("hour15 .plan").val(localStorage.getItem("hour15"));
$("hour16 .plan").val(localStorage.getItem("hour16"));
$("hour17 .plan").val(localStorage.getItem("hour17"));

$("#currentDay").text(moment().format('dddd, MMMM, Do'));

});

