//Current Date
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(document).ready(function () {
    // Save button clicker 
    $(".saveButton").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        // Saving all information enetered in local storage
        localStorage.setItem(time, text);
    })
})

function timeTracker() {
    //Current number of hours.
    let currentTime  = moment().hour();

    // Looping over the time blocks
    $(".time-block").each(function () {
        let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        // Checks time and changes background color based on current time
        if (timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

// Pull any information entered in from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();