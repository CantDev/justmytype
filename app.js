//window.console&&console.log('foo');

let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate",
];
let sentenceIndex = 0;
let letterIndex = 0;
let keyStrokes = sentences[sentenceIndex].length;
let numOfChar = 0;
let ok = $("<span />").attr({
  class: "glyphicon glyphicon-ok",
  "aria-hidden": "true",
});
let nope = $("<span />").attr({
  class: "glyphicon glyphicon-remove",
  "aria-hidden": "true",
});
let numberOfMistakes = 0;
let numberOfWords = 54;
let start = new Date();
$("#sentence").html(sentences[sentenceIndex]);
$("#target-letter").html(sentences[sentenceIndex][letterIndex]);
console.log(keyStrokes);
let currentSentence = sentences[sentenceIndex];

// Holy Shit, stating my code. Gonna try to make the keyboard go in an out or whatever.

//This section shows and hides keyboards
$(document).ready(function () {
  //document.ready prepares the web page to read your javascript
  $("#keyboard-lowercase-container").show(); //targets the lowercase keyboard ID
  $("#keyboard-upper-container").hide(); //targets the uppercase keyboard ID

  $("body").on("keydown", function (key) {
    if (key.which == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });
  $("body").on("keyup", function (key) {
    if (key.which == 16) {
      $("#keyboard-lower-container").show();
      $("#keyboard-upper-container").hide();
    }
    $("span.key").each(function () {
      if ($(this).text() == keyStroke) {
        $(this).removeClass("highlight");
      }
    });
  });
});

//This makes the highlight on the keys

$("body").on("keypress", function (event) {
  keyStroke = event.key;
  console.log(keyStroke);
  $("span.key").each(function () {
    if ($(this).text() == keyStroke) {
      $(this).addClass("highlight");
    }
  });
});

//Lets try to get the letters at the top
//Not sure why this works tbh

//Lets try to get the yellow box to move

$("body").on("keypress", function (event) {
  //Targeting the body, once a key is pressed...
  if (event.which !== 16) {
    //as long as its not the shift key
    $("#yellow-block").css("left", "+=17px"); //move #yellow-box left 15 px
    $("#target-letter").html(sentences[sentenceIndex][letterIndex++]);
  }

  if (keyStrokes == letterIndex) {
    sentenceIndex++;
    keyStrokes = sentences[sentenceIndex].length;
    $("#sentence").html(sentences[sentenceIndex]);
    $("#yellow-block").css("left", "0px");}
    if (currentSentence.charCodeAt(letterIndex) == event.key) {

    $("#feedback").append("<span class = 'glyphicon glyphicon-ok'></span>");
    letterIndex++;
  } else {
    $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>");
  }
  if (letterIndex == currentSentence.length) {
    letterIndex = 0;
    sentenceIndex++;
  }
});

//I spent so much time trying to get the gliphs together and it absolutely did not work.
