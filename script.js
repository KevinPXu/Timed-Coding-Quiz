var startContEl = document.querySelector("#startContainer");
var startBtnEl = document.querySelector("#startButton");
var restartBtnEl = document.querySelector("#restartQuiz");
var timerEl = document.querySelector("#timer");
var mainContEl = document.querySelector("#container");
var answerChoiceEl = document.querySelector("#answerChoices");
var answerCorrectEl = document.querySelector("#isAnswerCorrect");
var decisionEl = document.querySelector("#decision");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var mainHeaderEl = document.querySelector("#mainHeaderContainer");
var highscoreHeaderEl = document.querySelector("#hiddenHighscoreHeader");
var highscoreEl = document.querySelector("#hiddenHighScore");
var highscoreInputEl = document.querySelector("#initials");
var highscoreForm = document.querySelector("#highscoreForm");
var highscoreListEl = document.querySelector("#highscoreList");
var clearHighscoreEl = document.querySelector("#clearHighscore");
var viewHighscoreEl = document.querySelector("#viewHighScore");
var questionCount = 0;
var mainTimer = 61;
var highscores = [];
var timeInterval = "";
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
    correctAnswer: "4",
  },
  {
    question: "How can you add a comment in javaScript?",
    answerChoices: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment",
      "#This is a comment",
    ],
    correctAnswer: "1",
  },
  {
    question: "How do you find the largest number of 2 and 4?",
    answerChoices: ["Math.Ceil(2,4)", "Math.max(2,4)", "ceil(2,4)", "top(2,4)"],
    correctAnswer: "2",
  },
  {
    question: "In JavaScript, the symbols + - * and / are:",
    answerChoices: [
      "operators",
      "expressions",
      "comparison operators",
      "None of the Above",
    ],
    correctAnswer: "1",
  },
  {
    question:
      "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's javaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "2",
  },
  {
    question: "In JavaScript, the expression x!=y returns false if:",
    answerChoices: [
      "the variables are equal",
      "x is less than y",
      "the variables are not equal",
      "None of the above",
    ],
    correctAnswer: "1",
  },
  {
    question:
      "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "3",
  },
  {
    question:
      'In JavaScript, what would be the proper form of address in the object hierarchy for the second element in a form called "info"?',
    answerChoices: [
      "document.info.elements[1]",
      "document.info.elements[2]",
      "document.forms.info.elements[2]",
      "info.elements[2]",
    ],
    correctAnswer: "1",
  },
];

//all event listeners for buttons and form element in the highscore page
startBtnEl.addEventListener("click", startQuiz);
restartBtnEl.addEventListener("click", restartQuiz);
//adds event listener to the buttons and runs the UserInput
answerChoiceEl.addEventListener("click", function (event) {
  answerClicked(event.target);
});
//stores initials from form and stores it in an array
highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var highscoreInput = highscoreInputEl.value.trim();
  if (highscoreInput === "") {
    return;
  }
  storeHighscore(highscoreInput);
  renderHighscore();
  highscoreInput.value = "";
  highscoreInputEl.disabled = true;
});
clearHighscoreEl.addEventListener("click", clearHighscore);
viewHighscoreEl.addEventListener("click", function () {
  viewHighscore(false);
});

//start of functions in program

//initially displays the first question when program starts
function startQuiz() {
  console.log("test start");
  startContEl.setAttribute("id", "hiddenStart");
  setTimer();
  renderQuestion(questionBank[questionCount]);
}

//restarts the quiz on the first question, hides the highscore screen and renders questions
function restartQuiz() {
  mainTimer = 61;
  setTimer();
  mainContEl.setAttribute("id", "container");
  mainHeaderEl.setAttribute("id", "mainHeaderContainer");
  highscoreHeaderEl.setAttribute("id", "hiddenHighscoreHeader");
  highscoreEl.setAttribute("id", "hiddenHighScore");
  highscoreForm.setAttribute("id", "highscoreForm");
  renderQuestion(questionBank[questionCount]);
  highscoreInputEl.disabled = false;
}

//sets a timer to count down and act as a score for the quiz
function setTimer() {
  timeInterval = setInterval(function () {
    mainTimer--;
    timerEl.textContent = "Time remaining: " + mainTimer;
    if (mainTimer === 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

//renders the next question after the button is pressed
function renderQuestion(question) {
  setQuestionText(question.question);
  setQuestionChoices(question.answerChoices);
}

function setQuestionText(questionText) {
  document.getElementById("question").textContent = questionText;
}

function setQuestionChoices(answerChoices) {
  answerChoiceEl.innerHTML = " ";
  for (var i in answerChoices) {
    var ansChoice = document.createElement("button");
    ansChoice.setAttribute("data-choice", [i]);
    var ansChoiceCont = document.createTextNode(answerChoices[i]);
    ansChoice.appendChild(ansChoiceCont);
    answerChoiceEl.appendChild(ansChoice);
  }
}

//calculates if the userInput was correct
function answerClicked(target) {
  checkLastQuestionAnswered();
  checkAccuracy();

  var toastInterval = setInterval(function () {
    decisionEl.textContent = "";
    clearInterval(toastInterval);
  }, 1000);
  questionCount++;
  renderQuestion(questionBank[questionCount]);
}

function checkLastQuestionAnswered() {
  if (questionCount === questionBank.length - 1) {
    endQuiz();
    clearInterval(timeInterval);
    return;
  }
}

function checkAccuracy() {
  var input = target.getAttribute("data-choice");
  if (input === questionBank[questionCount].correctAnswer) {
    decisionEl.textContent = decisionEl.getAttribute("data-correct");
  } else {
    decisionEl.textContent = decisionEl.getAttribute("data-wrong");
    mainTimer -= 5;
  }
}

function endQuiz() {
  console.log("hello");
  mainContEl.setAttribute("id", "hideQuestions");
  mainHeaderEl.setAttribute("id", "hideMainHeader");
  highscoreHeaderEl.setAttribute("id", "highscoreHeaderContainer");
  highscoreEl.setAttribute("id", "highscoreContainer");
  questionCount = 0;
}

function storeHighscore(initials) {
  var person = {
    initials: "",
    score: "",
  };
  person.initials = initials;
  person.score = mainTimer;
  console.log(person.score);
  highscores.push(person);
  highscores.sort((a, b) => b.score - a.score);
  console.log(highscores);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  mainTimer = 61;
}

function renderHighscore() {
  console.log("highscores:" + JSON.stringify(highscores));
  highscoreListEl.innerHTML = "";
  for (var i in highscores) {
    var highscore = highscores[i];
    var li = document.createElement("li");
    li.textContent = highscore.initials + ": " + highscores[i].score;
    highscoreListEl.appendChild(li);
  }
}

function clearHighscore() {
  highscores = [];
  renderHighscore();
}

function viewHighscore(finishedQuiz = true) {
  mainContEl.setAttribute("id", "hideQuestions");
  mainHeaderEl.setAttribute("id", "hideMainHeader");
  highscoreHeaderEl.setAttribute("id", "highscoreHeaderContainer");
  highscoreEl.setAttribute("id", "highscoreContainer");
  startContEl.setAttribute("id", "hiddenStart");
  if (!finishedQuiz) {
    highscoreForm.setAttribute("id", "hideForm");
  }
  renderHighscore();
  clearInterval(timeInterval);
}
