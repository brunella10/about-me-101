
var answerLoops = 0;
var rightAnswer = 0;

var userName = 'userName';

var userName = prompt('What is your name?');
alert('Very nice to meet you ' + userName );
console.log('when asked user name, always respond')

//question1

var university = prompt('What university did you attend?');
alert('Oh, amazing!');
console.log('when user responds about a place, respond with amazing');

//question2

var degree = prompt('Did I finish College?'); // add yes or not question//
console.log('if user did not answer, ask about something else');
if (degree === 'no') {
  NoIdont = 'It is not correct! I have 1 mayor degree in Law and around 5 master degree, most of them about tax and finance';
  alert(NoIdont);
} else if (degree === 'No') {
  NoIdoNot = 'It is not correct! I have 1 mayor degree in Law and around 5 master degree, most of them about tax and finance';
  alert(NoIdoNot);
} else {
  YesIdid = 'I graduate in 2007';
  alert(YesIdid);
  rightAnswer++;
}

//question3

var about = prompt('Did I like the university?');
console.log('if the user said no, change the questions about the university to hobbies or plans');
if (about === "no") {
  LikeIt = 'Sometimes! hahaha';
  alert(LikeIt);
} else {
  DisLike = 'Not always! I made some good friends there.';
  alert(DisLike);
  rightAnswer++;
}

//question4

var study = prompt('Do I like my career?');
console.log ('if the user answers no, ask why?');
//add if else //
if (study === "yes" || study === 'y') {
  rightAnswer++;
  answer = 'I am lawyer, what can I say!? ';
  alert(answer);
} else {
  answerNegative = 'It have good and bad things! ';
  alert(answerNegative);
}

//question5

var vacation = prompt('Do I have plans to take a vacation after CodeFellows?');
if (vacation === "yes") {
  PlaceToGo = 'off course! we gonna need it!';
  alert(PlaceToGo);
} else {
  rightAnswer++;
  StayHome = 'I gonna spend the day sleeping! ZzZzZzZ ';
  alert(StayHome);
}
alert('You have'  + rightAnswer +  'rightAnswer' );
//question6

//booleans true or false questions

var numberOfTries = 3;
var moving = 6;

while (numberOfTries > 0){
  var guess = prompt('How many times did I move in the past 10 years?');

  if (guess >  moving) {
    alert('Too high');
    console.log('if the guess is higher than moving variable let the user know the answer is to high.');
  } else if (guess < moving) {
    alert('Too low');
    console.log('if the guess is lower than moving variable ler the user know the answer is too low');
  } else {
    alert('Yes! That is CORRECT!');
    numberOfTries = -1;
    console.log('If the guess is equal to moving variable the answer is correct');
  }
  numberOfTries = numberOfTries-1;
}
