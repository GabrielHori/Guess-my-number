var guess = Math.floor(Math.random() * 100) + 1;
var score = 20;
var highscore = 0;
$(document).ready(function () {
  $("#check").click(function () {
    var a = Number($("#number").val());
    if (a == guess) {
      $("#guess").text("Bon numéro bien jouer");
      $("#win").text("Tu as gagné");
      $("body").css({ "background-color": "rgb(96, 185, 88)" });
      $("#score").text(score);
      if (highscore < score) {
        highscore = score;
        $("#highscore").text(highscore);
      }
    } else if (!a) {
      $("#guess").text("no number");
    } else if (a < 1 || a > 100) {
      $("#guess").text("Pas Inclu");
    } else if (a < guess) {
      $("#guess").text("Le chiffre est trop bas");
      score--;
      $("#score").text(score);
      if (score <= 0) {
        $("#guess").text("Tu as perdu");
      }
    } else if (a > guess) {
      $("#guess").text("Le chiffre est trop haut");
      score--;
      $("#score").text(score);
      if (score <= 0) {
        $("#guess").text("Tu as perdu");
      }
    }
    //console.log(guess);
  });

  $("#again").click(function () {
    $("#guess").text("Start Guessing ....!");
    $("#win").text("GUESS MY NUMBER");
    score = 20;
    $("#score").text(score);
    guess = Math.floor(Math.random() * 100) + 1;
    $("body").css({ "background-color": " rgba(29, 27, 27, 0.849)" });
    $("#number").val("");
    //console.log("new number  = " + guess);
  });
});
