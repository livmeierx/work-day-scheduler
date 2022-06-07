var saveBtn = $(".saveBtn");

$("#currentDay").text(dayjs().format('dddd MMMM Do YYYY'));

function timeBlock() {
    var hour = dayjs().hours();

    $(".time-block").each(function() {
        var timeNow = parseInt($(this).attr("id"));

        if (timeNow > hour) {
            $(this).addClass("future");
        } 
        else if (timeNow === hour) {
            $(this).addClass("present");
        } 
        else {
            $(this).addClass("past");
        }
    })
};