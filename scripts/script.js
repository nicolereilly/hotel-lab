$(function() {

  $(document).ready(function () {
    console.log("doc is ready");
})
  

$("#btn").on("click", () => {
  console.log("here");
  let selectedOption;
  console.log("val" + selectedOption);
  if ($("input:radio[name='availablity']").is(":checked")) {
    selectedOption = $("input[name='availablity']:checked").val();
    // show the output:
  }
  output.innerText = selectedOption
    ? `You selected ${selectedOption}`
    : `You haven't selected any availablity`;
});




});
    