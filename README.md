# Timed-Coding-Quiz

## Technologies Used

- HTML
- CSS
- JavaScript
- Web APIs
- VS Code
- Git
- GitHub

## Link to Application

https://kevinpxu.github.io/Timed-Coding-Quiz/

## Summary

This project was used to teach myself about creating a webpage dynamically from the ground up using JavaScript and web API's to allow for an interactive webpage. I was able to use JavaScript to dynamically add buttons to the quiz which allows for you to easily add questions of different number of answer choices. I also used the web API features to manipulate the DOM dynamically within Javascript to essentially create three different webpages within one script. The project was a great introduction to learning how to create more dynamic websites. 

## Demonstration

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/Coding%20Quiz.gif)
## Description

Dynamic coding quiz with 10 questions and a timer that counts as your score. When you load into the page, you are presented with instructions and a start button. When you hit the start button, a timer will start and the first question is presented. As you move through the quiz, each incorrect answer will take five seconds off your timer. After either you finish the questions or time runs out, a high score screen will be displayed. You will be allowed to add your initials and save your score, only one score per quiz session. You will be allowed to reset the highscore when you would like, and you will be presented with a restart quiz button. That button will restart the quiz from the first question and will allow you put another highscore. The highscores are ordered from highest to lowest. While taking the quiz you can view the highscores at any time but you will be forced to restart the quiz if you choose. On view highscore there will be no input for highscores.

## Code Snippet

### Functions to dynamically create the questions and to clear the questions when a choice is clicked

```JavaScript
function setQuestion(question) {
  setQuestionText(question.questionText);
  setQuestionChoices(question.answerChoices);
}

function setQuestionText(questionText) {
  document.getElementById("question").textContent = questionText;
}

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
```

### Function to show and store the highscores 
```JavaScript
function storeHighscore(initials) {
  highscores.push({
    initials,
    score: mainTimer,
  });
  highscores.sort((a, b) => b.score - a.score);
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

function renderHighscore() {
  highscoreListEl.innerHTML = "";
  for (var highscore of highscores) {
    var li = document.createElement("li");
    li.textContent = highscore.initials + ": " + highscore.score;
    highscoreListEl.appendChild(li);
  }
}
```


## Author Links

[LinkedIn](https://www.linkedin.com/in/kevin-xu-4672a7215/)
[GitHub](https://github.com/KevinPXu)
