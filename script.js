var startContEl = document.querySelector("#startContainer");
var startBtnEl = document.querySelector("#startButton");
var restartBtnEl = document.querySelector("#restartQuiz");
var timerEl = document.querySelector("#timer");
var mainContEl = document.querySelector("#container");
var questionEl = document.querySelector("#question");
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
];

//all event listeners for buttons and form element in the highscore page
startBtnEl.addEventListener("click", startQuiz);
restartBtnEl.addEventListener("click", restartQuiz);
//adds event listener to the buttons and runs the UserInput
answerChoiceEl.addEventListener("click", userInput);
highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var highscoreInput = highscoreInputEl.value.trim();
  if (highscoreInput === "") {
    return;
  }
  highscores.push(highscoreInput);
  storeHighscore(highscoreInput);
  renderHighscore();
  highscoreInput.value = "";
});
clearHighscoreEl.addEventListener("click", clearHighscore);
viewHighscoreEl.addEventListener("click", viewHighscore);

//start of functions in program

//initially displays the first question when program starts
function startQuiz() {
  console.log("test start");
  startContEl.setAttribute("id", "hiddenStart");
  setTimer();
  renderQuestions(questionCount);
}

function restartQuiz() {
  mainTimer = 61;
  setTimer();
  mainContEl.setAttribute("id", "container");
  mainHeaderEl.setAttribute("id", "mainHeaderContainer");
  highscoreHeaderEl.setAttribute("id", "hiddenHighscoreHeader");
  highscoreEl.setAttribute("id", "hiddenHighScore");
  renderQuestions(questionCount);
}

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
function renderQuestions(index) {
  console.log("test render");
  questionEl.textContent = questionBank[index].question;
  answerChoiceEl.innerHTML = " ";
  for (var i = 1; i < questionBank[index].answerChoices.length + 1; i++) {
    var ansChoice = document.createElement("button");
    console.log(ansChoice);
    ansChoice.setAttribute("data-choice", [i]);
    var ansChoiceCont = document.createTextNode(
      questionBank[index].answerChoices[i - 1]
    );
    ansChoice.appendChild(ansChoiceCont);
    answerChoiceEl.appendChild(ansChoice);
  }
}

//calculates if the userInput was correct
function userInput(event) {
  var input = "";
  var element = event.target;
  if (questionCount === questionBank.length - 1) {
    endQuiz();
    clearInterval(timeInterval);
    return;
  }
  // console.log(element);
  input = element.getAttribute("data-choice");
  console.log(questionCount);
  console.log("input: " + input);
  if (input === questionBank[questionCount].correctAnswer) {
    decisionEl.textContent = decisionEl.getAttribute("data-correct");
  } else {
    decisionEl.textContent = decisionEl.getAttribute("data-wrong");
    mainTimer -= 5;
  }
  questionCount++;
  renderQuestions(questionCount);
}

function endQuiz() {
  console.log("hello");
  mainContEl.setAttribute("id", "hideQuestions");
  mainHeaderEl.setAttribute("id", "hideMainHeader");
  highscoreHeaderEl.setAttribute("id", "highscoreHeaderContainer");
  highscoreEl.setAttribute("id", "highscoreContainer");
  renderHighscore();
  mainTimer = 61;
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
  //TODO: for loop to sort array of highscores
  // for (var i in highscores){
  //   if (person.score < highscore[i].)
  // }
  highscores.push(person);
  highscores.sort((a, b) => a.score - b.score);
  console.log(highscores);
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

function renderHighscore() {
  //console.log(highscores);
  for (var i in highscores) {
    var highscore = highscores[i];
    var li = document.createElement("li");
    li.textContent = highscore + ": " + highscores[i].person.score;
    highscoreListEl.appendChild(li);
  }
}

function clearHighscore() {
  highscores = [];
  renderHighscore();
}

function viewHighscore() {
  mainContEl.setAttribute("id", "hideQuestions");
  mainHeaderEl.setAttribute("id", "hideMainHeader");
  highscoreHeaderEl.setAttribute("id", "highscoreHeaderContainer");
  highscoreEl.setAttribute("id", "highscoreContainer");
  startContEl.setAttribute("id", "hiddenStart");
  renderHighscore();
  clearInterval(timeInterval);
}
