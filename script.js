$(document).ready(function () {
  const scheduleContainer = $("#scheduleList");
  const btn = $("#submitDay");

  // Event listener for the button click
  btn.on("click", function () {
    // Get the input value, trim whitespace, and convert to uppercase
    let selectedDay = $("#dayInput").val().trim().toUpperCase();
    console.log(selectedDay); // Log the selected day for debugging

    // Validate the input to ensure it is a valid letter day (A-G)
    if (!["A", "B", "C", "D", "E", "F", "G"].includes(selectedDay)) {
      alert("Type a valid letter"); // Alert 
      return; 
    } else {
      // Make an AJAX GET request to fetch the schedule data
      $.ajax({
        url: "https://api.npoint.io/e4f2d6f2c2ca276d9507", // URL of the hosted JSON file
        method: "GET", // HTTP method for the request
        success: function (data) {
          // Log the full schedule data for debugging
          const schedule = data.schedule;
          console.log(schedule);

          // Filter the schedule to get classes that meet on the selected day
          const daySchedule = schedule.filter(item => item.days.includes(selectedDay));
          console.log(daySchedule); // Log the filtered schedule for debugging

          // Render the HTML for the filtered schedule
          renderHTML(daySchedule);
        },
        error: function () {
          // Alert the user if there is an error fetching the schedule
          alert("Error. Try again.");
        }
      });
    }
  });

    // Append the constructed HTML to the schedule list
    $("#scheduleList").append(htmlString);
  }
});
