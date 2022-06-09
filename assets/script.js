var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd, MMMM Do'));

$(document).ready(function(){
    saveBtn.on("click", function(){
        var time = $(this).siblings(".hour").text();
        var plan = $(this).siblings(".plan").val();

        localStorage.setItem(time,plan);
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
    
    function startPlanner() {
        $(".hour").each(function(){
            var timeNow = $(this).text();
            var newPlan = localStorage.getItem(timeNow);

            if(newPlan !== null){
                $(this).siblings(".plan").val(newPlan);
            }
        });
    };


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
});

updateHour();
startPlanner();
