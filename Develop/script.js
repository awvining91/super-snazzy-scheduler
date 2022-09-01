

// This helps display the date and time. I used a the mini-project as reference.
var timeDisplayEl = $('#time-display');

//attempt jquery logic for time color blocks






//attempting local storage logic


$(".saveBtn").on("click", function () {


  console.log(this);

  var scribble = $(this).siblings(".write-here").val();

  var happen = $(this).parent().attr("id");

  localStorage.setItem(happen, scribble);

})

$("#9 .write-here").val(localStorage.getItem("9"));

$("#10 .write-here").val(localStorage.getItem("10"));

$("#11 .write-here").val(localStorage.getItem("11"));

$("#12 .write-here").val(localStorage.getItem("12"));

$("#13 .write-here").val(localStorage.getItem("13"));

$("#14 .write-here").val(localStorage.getItem("14"));

$("#15 .write-here").val(localStorage.getItem("15"));

$("#16 .write-here").val(localStorage.getItem("16"));

$("#17 .write-here").val(localStorage.getItem("17"));

$("#18 .write-here").val(localStorage.getItem("18"));

$("#19 .write-here").val(localStorage.getItem("19"));





// This is a function for displaying date and time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }



  


  setInterval(displayTime, 1000);