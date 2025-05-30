document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      selectable: true,
  
      // Click to select a date and create a task
      select: function (info) {
        const task = prompt("Enter a task for " + info.startStr);
        if (task) {
          calendar.addEvent({
            title: task,
            start: info.startStr,
            allDay: true
          });
        }
        calendar.unselect();
      },
  
      // Example: preload a task
      events: [
        {
          title: "Family Meeting",
          start: "2025-06-01",
          allDay: true
        }
      ]
    });
  
    calendar.render();
  });
  