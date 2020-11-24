const readlineSync = require("readline-sync");
var score = 0;
var k =1;
function quesAns(que,ans){
  userAns = readlineSync.question(k+")."+que);
  k++;
  if(userAns.toUpperCase() == ans){
    console.log("You are right");
    score+=1;
  }
  else{
    console.log("You are wrong");
    console.log("Correct answer is "+ ans);
    score-=1;
  }
}

var highScores = [
  {
    score:10,
    name: "Yash",
  },
  {
    score:9,
    name: "Jack"
  },
  {
    score:8,
    name:"Krate"
  },
  {
    score:7,
    name:"Norm"
  },
  {
    score:6,
    name:"Klaus"
  },
  {
    score:5,
    name: "Krish",
  },
  {
    score:4,
    name: "Navil"
  },
  
]

var q1={
  que:"Well do you know my name?\n",
  ans:"YASH"
}
var q2={
  que:"Guess my age if I am millennial?\n",
  ans:19
}
var q3={
  que:"What's my favourite book?\n",
  ans:"HARRY PORTER"
}
var q4={
  que:"Whom do I admire the most?\n",
  ans:"VIVEKANANDA"
}
var q5={
  que:"What is my favourite no.?\n",
  ans:7
}
var q6={
  que:"Where do I live?\n",
  ans:"RAJASTHAN"
}
var q7={
  que:"I prefer Green Tea or Coffee?\n",
  ans:"COFFEE"
}
var q8={
  que:"Who is my favourite superhero?\n",
  ans:"IRON MAN"
}
var q9={
  que:"Who is my favourite cartoon character?\n",
  ans:"SHINCHAN"
}
var q10={
  que:"What is my goal?\n",
  ans:"FAANG"
}
var quizList=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

userName = readlineSync.question("Enter your name?\n");
console.log("Hello! "+userName+" WELCOME to Do You Know Me Quiz !!\n");
for(var i=0;i<quizList.length;i++){
  quesAns(quizList[i].que, quizList[i].ans);

}
console.log("\nYour Score is : "+ score);
console.log("LEADER BOARD :");
for(let j=0;j<highScores.length;j++){
  if(score === highScores[j].score){
    console.log("-> "+userName+ " " + score);
  }
  
  console.log(highScores[j].name + " " +highScores[j].score);
}