var questionEl = document.querySelector("#question");
var answerChoiceEl = document.querySelector("#answerChoices");
var answerCorrectEl = document.querySelector("#isAnswerCorrect");
var decisionEl = document.querySelector("#decision");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var questionNum = 0;

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

startQuiz();
//initially displays the first question when program starts
function startQuiz() {
  console.log("hello");
  renderQuestions(questionNum);
}

function renderQuestions(index) {
  console.log("hello");
  answerChoiceEl.innerHTML = " ";
  for (var i = 0; i < 4; i++) {
    var ansChoice = document.createElement("button");
    console.log(ansChoice);
    ansChoice.setAttribute("data-choice", "[i]");
    ansChoice.textContent(questionBank[index].answerChoices[i]);
    answerChoiceEl.appendChild(ansChoice);
    console.log(ansChoice);
  }
}

//retrieves data from the userInput and determines if the answer choice was correct.

// function userInput() {
//   //console.log("hello2");
//   answerChoiceEl.addEventListener("click", function (event) {
//     var input = "";
//     var element = event.target;
//     //console.log(element);
//     input = element.getAttribute("data-choice");

//     console.log("questionNum before decision" + questionNum);
//     //console.log("correct answer: " + questionBank[questionNum].correctAnswer);
//     if (input === questionBank[questionNum].correctAnswer) {
//       decisionEl.textContent = decisionEl.getAttribute("data-correct");
//       //console.log("correct");
//     } else {
//       decisionEl.textContent = decisionEl.getAttribute("data-wrong");
//       //console.log("wrong");
//     }
//     questionNum++;
//     //console.log(input);
//     //console.log(questionNum);

//     //If we come to the end of the list of questions, it will return out of the function
//     console.log(questionBank.length);
//     if (questionNum < questionBank.length) {
//       displayQuestion(questionNum);
//     } else {
//       return;
//     }
//   });
// }
// // displays each question to the buttons and the question name.
// function displayQuestion(index) {
//   //console.log("hello");
//   console.log("index" + index);
//   questionEl.textContent = questionBank[index].question;
//   answerChoiceEl = " ";
//   for (var i in questionBank.answerChoices){
//     var ansChoice = answerChoiceEl.createElement("button");
//     ansChoice.setAttribute("data")
//   }

//   userInput();
// }
