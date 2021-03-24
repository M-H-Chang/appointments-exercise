$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const descInput = $("input#desc").val();
    const dateInput = $("input#date").val();
    const timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".desc").text(descInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $(location).attr("href", "success.html");
  });
});