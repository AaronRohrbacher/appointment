$(document).ready(function(){
  $("form#appointments").submit(function(event){
    $("#appointments").toggle();
    event.preventDefault();
    var name = $("input#name").val();
    var description = $("input#description").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    $("#spanName").text(name);
    $("#spanDescription").text(description);
    $("#spanDate").text(date);
    $("#spanTime").text(time);

    $("#confirm").show();
  });
});
