$(() => {
  let $today = moment().format("dddd, MMMM Do");
  let $currentHour = moment().format("H A");

  // Set Today
  $("#currentDay").text($today);

  let $workingHours = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
  ];

  // Load Data From Local Storage

  let $data = JSON.parse(localStorage.getItem("planer_data"));

  if ($data !== null) {
    $workingHours = $data;
  }

  function getTimeColor(time) {
    let $currentTime = moment($currentHour, "H A");
    let $givenTime = moment(time, "H A");

    if ($currentTime.isBefore($givenTime)) {
      return "future";
    } else if ($currentTime.isAfter($givenTime)) {
      return "past";
    } else {
      return "present";
    }
  }

  // 'Frontend' Part of Code

  $.each($workingHours, (index, value) => {
    let $div = $("<div>", { class: "time-block", id: `${index}` });
    let $content = `
      <div class="row no-gutters input-group">
        <div class="col-md-1 hour pt-3">${value.time}</div>
        <textarea class="form-control description ${getTimeColor(
          value.time
        )}">${value.event}</textarea>
        <button class="btn col-sm-2 col-lg-1 save-btn"><i class="far fa-save"></i></button>
      </div>
    `;
    $div.html($content);
    $(".container").append($div);
  });

  // Handle Save Button Click
  $(".save-btn").on("click", function (e) {
    let $blockIndex = Number($(e.target).closest(".time-block").attr("id"));
    let $eventText = $(e.target).parent().siblings("textarea").val();
    $workingHours[$blockIndex].event = $eventText;
    localStorage.setItem("planer_data", JSON.stringify($workingHours));
  });
});
