let timeBlockId, textareaValue, timeCurrent, hours;

$(document).ready(function () {
  // Add a click event listener for the save button using event delegation
  $(document).on('click', '.saveBtn', function () {
    timeBlockId = $(this).closest('.time-block').attr('id');
    textareaValue = $(this).siblings('.description').val();

    
    if (textareaValue.trim() === '') {
      alert('Please enter a description');
    }

    saveToLocalStorage(timeBlockId, textareaValue);

    setClass(timeBlockId);
  });

  timeCurrent = document.getElementById('currentDay').innerHTML = dayjs().format('[YYYYescape] YYYY-MM-DD (HH:mm:ss)');
  hours = parseInt(dayjs().format('HH'));

  setClass();

  

});

function saveToLocalStorage(timeBlockId, textareaValue) {
  localStorage.setItem(timeBlockId, textareaValue);
  
}

function setClass() {
  let currentHour = parseInt(dayjs().format('HH'));

  $('.time-block').each(function () {
    let blockHour = parseInt(this.id.split('-')[1]);

    $(this).removeClass("past present future");

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}



// TODO: Continue with the rest of your code and implement the additional features as needed.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
        // TODO: Add code to display the current date in the header of the page