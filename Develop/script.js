//Hi friend! I hope you like my day scheduler app! :)



// This helps display the date and time. I used a the mini-project as reference.
var timeDisplayEl = $('#time-display');

/*Below is my attempted jquery logic for time color blocks. For some reason
for some reason it kept making my date and time at the top of the page stop working.

I was trying to figure out a way to use an if else statement using moment.js
to compare to the hour of the time block and update the class of the time-block
in css using the jQuery methods .addClass and .removeClass but was having
toruble getting it work properly without stopping the clock. 

I will probably 
re-submit the challenge later once I have more time to work on it and 
my knowledge increases.
*/

/*


function TimeNow() {
    var blockThing = moment().format(' hh');
    blockDisplayEl.text(blockThing);
  }


function ()
  if ( hourTimeBlock < timeNow) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
   }
  else if ( hourTimeBlock === timeNow ) {
   $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
    }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
    }
*/



/*  Here is the local storage section. Basically I had jQuery grab the .saveBtn class
to look for a click, which will then perfom a function that will pass through
a "this" parameter that refers the the button tag element area.

I had to two local variables defined. Scribble chains the .sibling method to
grab the text written on the app hour block with the .write-here class and
returns the value.

The happen local variable grabs and passes the "this" parameter to look
reference the parent id and stores them in local storage.

*/


$(".saveBtn").on("click", function () {


  console.log(this);

  var scribble = $(this).siblings(".write-here").val();

  var happen = $(this).parent().attr("id");

  localStorage.setItem(happen, scribble);

})


/*   Here I used jQuery to grab the id and class to return
the values stored in local storage with getItem.

Bascially jQuery helps me return the text written in the time block
area that was saved when the user pushed the saved icon and 
returns it in the same spot. 

For me writing this in
vanilla javascript would have been really hard but
with jQuery it's way easier for me. :)


*/

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

/* References used to help with the logic:
https://www.w3schools.com/jquery/jquery_events.asp
https://stackoverflow.com/questions/40791207/setting-and-getting-localstorage-with-jquery
https://api.jquery.com/parent/#parent-selector
class materials and class miniproject
*/


// This is a function for displaying date and time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }



  


  setInterval(displayTime, 1000);

  /* Some of my many references/resources used:

  https://api.jquery.com/

  https://getbootstrap.com/docs/4.1/getting-started/introduction/

  https://stackoverflow.com/questions/40791207/setting-and-getting-localstorage-with-jquery

  https://demos.devexpress.com/Bootstrap/Scheduler/ViewTypes.aspx

  https://www.w3schools.com/jquery/jquery_events.asp

  https://www.youtube.com/watch?v=9YOVfiyNxhc

  youtube.com

  https://www.youtube.com/c/TheNetNinja/playlists?app=desktop

  https://www.youtube.com/watch?v=6BozpmSjk-Y

  lots of google

  class materials

  https://www.youtube.com/watch?v=TBVpCKNuPtw

  class miniproject

  https://api.jquery.com/parent/#parent-selector

  some others I don't remember the links to


  */

//Thanks for checking out my app! :)