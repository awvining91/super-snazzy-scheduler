

// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

//attempt jquery logic for time color blocks








/*

// saving text in local storage first option
const input = document.querySelector("input"),
  h3 = document.quetySelector("h3");

h3.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup", display);

//stores in the info on local browser
function display () {
  localStorage.setItem('value', input.value);
//gets stored info from local browser
  console.log(localStorage.getItem("value"));
  h3.innerHTML = localStorage.getItem("value");

}
*/

/*
// saving text in local storage first option
const inputTwo = document.getElementById("second-box"),
  textarea = document.getElementById("second-box");

textarea.innerHTML = localStorage.getItem("value");

inputTwo.addEventListener("keyup", display);

//stores in the info on local browser
function displayTwo () {
  localStorage.setItem('value', inputTwo.value);
//gets stored info from local browser
  console.log(localStorage.getItem("value"));
  second-box.innerHTML = localStorage.getItem("value");

}
*/

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