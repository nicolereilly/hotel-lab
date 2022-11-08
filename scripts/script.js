$(function () {
  //what radio value did they select?

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">S</option>`)
        .append(`<option value="brains">M</option>`)
        .append(`<option value="bbq">L</option>`);
    } else if (radioChoice === "B") {
      //`<option value="${optValue}">${optText}</option>`

      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">You cannot Adopt Leo :( </option>`)
    } else {
      alert("do default stuff");
    }
  });
});
