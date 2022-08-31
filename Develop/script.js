// save reference to important DOM elements
var timeDisplayEl = $('#time-display');



// saving text in local storage
const input = document.querySelector("input"),
    h3 = document.querySelector("h3");
    
h3.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup", display);

//stores in the info on local browser
function display () {
  localStorage.setItem('value', input.value);
//gets stored info from local browser
  console.log(localStorage.getItem("value"));
  h3.innerHTML = localStorage.getItem("value");

}







// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }



  








  setInterval(displayTime, 1000);