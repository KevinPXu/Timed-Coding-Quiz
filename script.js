var questionEl = document.querySelector("#question");
var answerChoiceEl = document.querySelector("#answerChoices");
var answerCorrectEl = document.querySelector("#isAnswerCorrect");
var decisionEl = document.querySelector("#decision");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var questionCount = 0;

var questionBank = [
  {
    question: "What does the method split do to a string?",
    answerChoices: [
      "splits the last character off the string",
      "deconstructs the string and places it into an array",
      "splits the first character off the string",
      "splits the string into two user selected variables",
    ],
    correctAnswer: "2",
  },
  {
    question:
      "Where is the correct place to insert a JavaScript in an HTML document?",
    answerChoices: [
      "Both the <head> section and the <body> section are correct",
      "The bottom of the <body> section",
      "The <head> section",
      "The footer section",
    ],
    correctAnswer: "2",
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answerChoices: [
      "call myFunction()",
      "call function myFunction",
      "Call.myFunction()",
      "myFunction()",
    ],
    correctAnswer: "2",
  },
];

startQuiz();
//initially displays the first question when program starts
function startQuiz() {
  var test = 1;
  console.log("hello");
  renderQuestions(questionCount);
}

While (questionCount < questionBank.length) {
    
}

function renderQuestions(index) {
  console.log("hello");
  questionEl.textContent = questionBank[index].question;
  answerChoiceEl.innerHTML = " ";
  for (var i = 1; i < questionBank[index].answerChoices.length + 1; i++) {
    var ansChoice = document.createElement("button");
    console.log(ansChoice);
    ansChoice.setAttribute("data-choice", [i]);
    var ansChoiceCont = document.createTextNode(
      questionBank[index].answerChoices[i]
    );
    ansChoice.appendChild(ansChoiceCont);
    answerChoiceEl.appendChild(ansChoice);
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
