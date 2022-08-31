

// save reference to important DOM elements
var timeDisplayEl = $('#time-display');







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

$("#hour9 .description").val(localStorage.getItem("hour9"));
































// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }



  








  setInterval(displayTime, 1000);