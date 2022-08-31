

// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

//attempt jquery logic for time color blocks






//attempting local storage logic


$(".saveBtn").on("click", function () {


  console.log(this);

  var text = $(this).siblings(".description").val();

  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);

})

$("#9 .description").val(localStorage.getItem("9"));

$("#10 .description").val(localStorage.getItem("10"));

$("#11 .description").val(localStorage.getItem("11"));

$("#12 .description").val(localStorage.getItem("12"));

$("#13 .description").val(localStorage.getItem("13"));

$("#14 .description").val(localStorage.getItem("14"));

$("#15 .description").val(localStorage.getItem("15"));

$("#16 .description").val(localStorage.getItem("16"));

$("#17 .description").val(localStorage.getItem("17"));





// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }



  




  setInterval(displayTime, 1000);