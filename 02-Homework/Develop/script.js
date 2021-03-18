//Current Date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveButton").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})

