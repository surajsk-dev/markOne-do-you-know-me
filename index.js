//Stock Market quiz
//chalk
var chalk=require('chalk')
//questions and answers using object
console.log(chalk.green(`Do You Know Me Quiz.
After completion of quiz send your screenshot to update your score here.`))
console.log("---------------------------------------------")
questionOne={
question:chalk.bold.yellow(`what is my nick name? \n`),
answer:"bunty"
}
questionTwo={
question:chalk.bold.yellow(`who is my fav bollywood actor? \n`),
answer:"shahrukh khan"
}
questionThree={
question:chalk.bold.yellow(`what is my fav color? \n`),
answer:"black"
}
questionFour={
question:chalk.bold.yellow(`which city do i live? \n`),
answer:"hyderabad"
}
questionFive={
question:chalk.bold.yellow(`what is my fav indian web series\n`),
answer:"sacred games"
}
//score
score=0;
highScore=[
  {
    name:"suraj",
    score:4
  },
  {
    name:"shiva",
    score:3
  }
]
//creating array to store objects
var questionArr=[questionOne,questionTwo,questionThree,questionFour,questionFive]
//taking input
var readLineSync=require("readline-sync");
//function for right or wrong
function play(question,answer){
  questionAnswer=readLineSync.question(question);
  if(questionAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are right.");
    score=score+1;
  }else{
    console.log("you are wrong");
  }
  console.log("correct answer is: "+answer);
  console.log("your current score is: "+score);
  console.log("------------------------------------------");
}
//for loop for question
for(i=0;i<questionArr.length;i++){
  current=questionArr[i];
  play(current.question,current.answer);
}
//high score
console.log(chalk.bold.red("High scorers are: "));
for(i=0;i<highScore.length;i++){
  high=highScore[i];
  console.log(high.name,"score is: "+high.score);
  console.log("-------------------------");
}

var highest=[];
for(i in highScore){
  highest.push(highScore[i].score) 
}
if(Math.max(...highest)<score){
   console.log(chalk.bold.green("Congratulations! your score is highest: "+score));
   console.log(chalk.bold.red("Note: update your score by sending screenshot."))
}else{
    console.log(chalk.bold.green("Your Score is: "+score));
    console.log(chalk.bold.red("Note: update your score by sending screenshot."));
  }

