$(document).ready(function(){

  $("#attributes-button").click(function() {
    $("body").toggleClass("red-background")
  });

  $(".code-html").each(function(index, obj) {
    $(this).text($(this).html());
  });

  $("#branching-button").click(function() {
    var color = prompt("Type either 'green' or 'red'!");
      if (color === "green") {
        $("body").removeClass();
        $("body").addClass("green-background")
      } else if (color === "red") {
        $("body").removeClass();
        $("body").addClass("red-background")
      } else {
        alert("You didn't choose a color! Try again!")
      }
  });

  $("form").submit(function() {
    var formInput = $("input#message").val();
    alert("You said '" + formInput + "'.")
  });

  $("#functions-button").click(function() {
        alert("You clicked the button! Good job!")
    });

  $("#loops-button").click(function() {
    var loops = ['first', 'second', 'third'];
      loops.forEach(function(loop) {
      alert('Here is the ' + loop + ' alert!');
    });
  });
});
