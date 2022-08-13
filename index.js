var readlineSync = require("readline-sync")
var score = 0;
var highScores = [
  {
    name: "Ashish",
    score: 5
  },
  {
    name: "Karan",
    score: 4
  }];
var questions = [{
  question: "What is Ashish's surname? ",
  answer: "Kalra"
}, {
  question: "What is Ashish's age? ",
  answer: "28"
}, {
  question: "Is Ashish's taller than 6 Feet? ",
  answer: "No"
}, {
  question: "Where does Ashish live? ",
  answer: "Alwar"
}, {
  question: "What is Ashish favourite video game? ",
  answer: "Red Dead Redemption 2"
}
];
function hello() {
  var userName = readlineSync.question('What is your name? ');

  console.log('Hello! ' + userName + ', Welcome to how much do you know your friend?')
}
function quiz(question, answer) {
  var ans = readlineSync.question(question);
  if (ans === answer) {
    console.log("You are right!");
    score = score + 1;
  } else {
    console.log("Wrong Answer");
  } console.log("current score: ", score);
  console.log("-------------")
}
function loopy() {
  for (i = 0; i < questions.length; i++) {
    var currentq = questions[i];
    quiz(questions[i].question, questions[i].answer);
  }
}
hello()
loopy()

