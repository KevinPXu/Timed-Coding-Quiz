// created a list of querySelectors to select specific areas of the HTML to dynamically modify
var startContEl = document.querySelector("#startContainer");
var startBtnEl = document.querySelector("#startButton");
var restartBtnEl = document.querySelector("#restartQuiz");
var timerEl = document.querySelector("#timer");
var mainContEl = document.querySelector("#container");
var answerChoicesEl = document.querySelector("#answerChoices");
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
//question bank for quiz, can easily add new questions with different number of answer choices
var questionBank = [
  {
    questionText: "What does the method split do to a string?",
    answerChoices: [
      "splits the last character off the string",
      "deconstructs the string and places it into an array",
      "splits the first character off the string",
      "splits the string into two user selected variables",
    ],
    correctAnswer: "deconstructs the string and places it into an array",
  },
  {
    questionText:
      "Where is the correct place to insert a JavaScript in an HTML document?",
    answerChoices: [
      "Both the <head> section and the <body> section are correct",
      "The bottom of the <body> section",
      "The <head> section",
      "The footer section",
    ],
    correctAnswer: "The bottom of the <body> section",
  },
  {
    questionText: 'How do you call a function named "myFunction"?',
    answerChoices: [
      "call myFunction()",
      "call function myFunction",
      "Call.myFunction()",
      "myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    questionText: "How can you add a comment in javaScript?",
    answerChoices: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment",
      "#This is a comment",
    ],
    correctAnswer: "//This is a comment",
  },
  {
    questionText: "How do you find the largest number of 2 and 4?",
    answerChoices: ["Math.Ceil(2,4)", "Math.max(2,4)", "ceil(2,4)", "top(2,4)"],
    correctAnswer: "Math.max(2,4)",
  },
  {
    questionText: "In JavaScript, the symbols + - * and / are:",
    answerChoices: [
      "operators",
      "expressions",
      "comparison operators",
      "None of the Above",
    ],
    correctAnswer: "operators",
  },
  {
    questionText:
      "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's javaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "Document",
  },
  {
    questionText: "In JavaScript, the expression x!=y returns false if:",
    answerChoices: [
      "the variables are equal",
      "x is less than y",
      "the variables are not equal",
      "None of the above",
    ],
    correctAnswer: "the variables are equal",
  },
  {
    questionText:
      "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "Window",
  },
  {
    questionText:
      'In JavaScript, what would be the proper form of address in the object hierarchy for the second element in a form called "info"?',
    answerChoices: [
      "document.info.elements[1]",
      "document.info.elements[2]",
      "document.forms.info.elements[2]",
      "info.elements[2]",
    ],
    correctAnswer: "document.info.elements[1]",
  },
];

//all event listeners for buttons and form element in the highscore page
//event listener for start button
startBtnEl.addEventListener("click", startQuiz);
//event listener for restart button on highscore screen
restartBtnEl.addEventListener("click", restartQuiz);
//stores initials from form and stores it in an array on submit of form
highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var highscoreInput = highscoreInputEl.value.trim();
  if (highscoreInput === "") {
    return;
  }
  storeHighscore(highscoreInput);
  renderHighscore();
  mainTimer = 61;
  highscoreInput.value = "";
  highscoreInputEl.disabled = true;
});
//event listener for clearing the highscore
clearHighscoreEl.addEventListener("click", clearHighscore);
//event listener for view highscore button
viewHighscoreEl.addEventListener("click", function () {
  viewHighscore(false);
});

//start of functions in program

//initially displays the first question when program starts
function startQuiz() {
  startContEl.setAttribute("id", "hiddenStart");
  questionCount = 0;
  setTimer();
  setQuestion(questionBank[questionCount]);
}

//restarts the quiz on the first question, hides the highscore screen and renders questions
function restartQuiz() {
  mainTimer = 61;
  questionCount = 0;
  setTimer();
  mainContEl.setAttribute("id", "container");
  mainHeaderEl.setAttribute("id", "mainHeaderContainer");
  highscoreHeaderEl.setAttribute("id", "hiddenHighscoreHeader");
  highscoreEl.setAttribute("id", "hiddenHighScore");
  highscoreForm.setAttribute("id", "highscoreForm");
  setQuestion(questionBank[questionCount]);
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
function setQuestion(question) {
  setQuestionText(question.questionText);
  setQuestionChoices(question.answerChoices);
}

//set the text for each question
function setQuestionText(questionText) {
  document.getElementById("question").textContent = questionText;
}

//creates element in the HTML depending on number of answer choices for that question. Also adds an event listener to each button.
function setQuestionChoices(answerChoices) {
  answerChoicesEl.innerHTML = " ";
  for (var i in answerChoices) {
    var ansChoice = document.createElement("button");
    ansChoice.addEventListener("click", function (event) {
      answerClicked(event.target);
    });
    var ansChoiceCont = document.createTextNode(answerChoices[i]);
    ansChoice.appendChild(ansChoiceCont);
    answerChoicesEl.appendChild(ansChoice);
  }
}

//calculates if the answer choice chosen was correct and displays a message temporarily with a toaster timer 
function answerClicked(target) {
  if (questionCount === questionBank.length - 1) {
    endQuiz();
    return;
  }
  checkAccuracy(target);
  incrementQuestion();
  var toastInterval = setInterval(function () {
    decisionEl.textContent = "";
    clearInterval(toastInterval);
  }, 1000);
}

//function for above to check if the answer chosen was correct or incorrect
function checkAccuracy(target) {
  if (target.textContent === questionBank[questionCount].correctAnswer) {
    decisionEl.textContent = decisionEl.getAttribute("data-correct");
  } else {
    decisionEl.textContent = decisionEl.getAttribute("data-wrong");
    mainTimer -= 5;
  }
}

//function to increment the question as each question is set
function incrementQuestion() {
  questionCount++;
  setQuestion(questionBank[questionCount]);
}

//ends the quiz by hiding the questions and showing the hidden highscore elements
function endQuiz() {
  mainContEl.setAttribute("id", "hideQuestions");
  mainHeaderEl.setAttribute("id", "hideMainHeader");
  highscoreHeaderEl.setAttribute("id", "highscoreHeaderContainer");
  highscoreEl.setAttribute("id", "highscoreContainer");
  questionCount = 0;
  clearInterval(timeInterval);
}

//stores the highscore by adding the initial and the time to an object, will sort the highscores after it is pushed to the array and stringifys the array to local storage
function storeHighscore(initials) {
  highscores.push({
    initials,
    score: mainTimer,
  });
  highscores.sort((a, b) => b.score - a.score);
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

//shows the highscores by creating elements depending on the length of the array
function renderHighscore() {
  highscoreListEl.innerHTML = "";
  for (var highscore of highscores) {
    var li = document.createElement("li");
    li.textContent = highscore.initials + ": " + highscore.score;
    highscoreListEl.appendChild(li);
  }
}

//clears the highscore array and rerenders the highscore to clear the html
function clearHighscore() {
  highscores = [];
  renderHighscore();
}

// toggles the ids to show the highscore elements and hide everything else on the screen and renders the highscores, also clears intervals for quiz restart
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
