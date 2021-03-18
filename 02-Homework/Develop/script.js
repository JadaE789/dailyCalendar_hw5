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
$("#nineAM .description").val(localStorage.getItem("nineAM"));
$("#tenAM .description").val(localStorage.getItem("tenAM"));
$("#elevenAM .description").val(localStorage.getItem("elevenAM"));
$("#twelvePM .description").val(localStorage.getItem("twelvePM"));
$("#onePM .description").val(localStorage.getItem("onePM"));
$("#twoPM .description").val(localStorage.getItem("twoPM"));
$("#threePM .description").val(localStorage.getItem("threePM"));
$("#fourPM .description").val(localStorage.getItem("fourPM"));
$("#fivePM .description").val(localStorage.getItem("fivePM"));

timeTracker();