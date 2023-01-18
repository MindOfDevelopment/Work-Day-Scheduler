$(() => {
  let today = moment().format("dddd, MMMM Do");
  let currentHour = moment().format("H A");

  // Set Today
  $("#currentDay").text(today);

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

  $.each($workingHours, (index, value) => {
    let $div = $("<div>", { class: "time-block", id: `${index}` });
    let $content = `
      <div class="row no-gutters input-group">
        <div class="col-md-1 hour pt-3">${value.time}</div>
        <textarea class="form-control description present">${value.event}</textarea>
        <button class="btn col-sm-2 col-lg-1 saveBtn"><i class="far fa-save"></i></button>
      </div>
    `;
    $div.html($content);
    $(".container").append($div);
  });
});
