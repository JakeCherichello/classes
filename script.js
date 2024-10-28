$(document).ready(function () {
    const scheduleUrl = 'https://api.npoint.io/2905ef9d18336a999b88'
   

// schedule
  const bellSchedule = {
    1:{ start: '8:24 AM', end: '9:31 AM'},
    2:{ start: '9:36 AM', end: '10:43 AM'},
    3:{ start: '10:48 AM', end: '11:55 AM'},
    4:{ start: '12:41 PM', end: '1:48 PM'},
    5:{ start: '1:53 PM', end: '3:00 PM'}
  }


  $('#submitDay').on('click', function () {
    const selectedDay = $('#dayInput').val().toUpperCase()

    // Makes sure that the user is putting a valid input 
    if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
      alert('Please enter a valid day (A-G)')
      return
    }

  })
})