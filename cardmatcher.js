


$(document).ready( function() {
  $("#grid-size").focus();
  $("#grid-size-button").click( function(e){
    e.preventDefault();
    var size = $("#grid-size").val();
    matcherController.init(size);
    matcherView.updateGameView();
    $("#grid-size-form").hide();
  });
});
  


