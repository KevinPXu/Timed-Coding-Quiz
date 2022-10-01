var questionEl = document.querySelector("#question");
var answerChoiceEl = document.querySelector("#answerChoices");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");

var questionBank = [
  {
    question: "What does the method split do to a string?",
    answerChoices: {
      a: "splits the last character off the string",
      b: "deconstructs the string and places it into an array",
      c: "splits the first character off the string",
      d: "splits the string into two user selected variables",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Where is the correct place to insert a JavaScript in an HTML document?",
    answerChoices: {
      a: "Both the <head> section and the <body> section are correct",
      b: "The bottom of the <body> section",
      c: "The <head> section",
      d: "The footer section",
    },
    correctAnswer: "b",
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answerChoices: {
      a: "call myFunction()",
      b: "call function myFunction",
      c: "Call.myFunction()",
      d: "myFunction()",
    },
    correctAnswer: "d",
  },
];

for (var i in questionBank) { 
  var clicked = false;
  displayQuestion(i);
  document.getElementById('button').onclick = function() {
    clicked = true;
  }
  while 
}

function displayQuestion(index) {
  questionEl.textContent = questionBank[index].question;
  choice1El.textContent = questionBank[index].answerChoices.a;
  choice2El.textContent = questionBank[index].answerChoices.b;
  choice3El.textContent = questionBank[index].answerChoices.c;
  choice4El.textContent = questionBank[index].answerChoices.d;
}
