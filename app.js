'use Strict';
var answerLoops = 0;
var rightAnswer = 0;

var userName = 'userName';
function greeting() {
  var userName = prompt('What is your name?');
  alert('Hoping you are having a good day, ' + userName );
  console.log('when asked user name, always respond');
}
greeting();
//question1

function university() {
  var university = prompt('What university did you attend?');
  alert('Oh, amazing!');
  console.log('when user responds about a place, respond with amazing');
}
university();
//question2

// yes or not answer

function degree() {
  var degree = prompt('Did I finish College?').toLowerCase(); // add yes or not question. I need method .toLowerCase();//
  console.log('if user did not answer, ask about something else');
  if (degree === 'no' || degree === 'n') {
    alert('It is not correct! I have 1 mayor degree in Law and around 5 master degree, most of them about tax and finance');
  } else if (degree === 'yes' || degree === 'y') {
    alert('Yes! I finished college in 2007.');
  } else {
    alert('Not that is not correct, i did finish the college back in 2007.');
    rightAnswer++;
  }
}
//the last else statement it could be for you to make the user know that the enter is not a valid option.
degree();
//question3

function about() {
  var about = prompt('Did I like the university?');
  console.log('if the user said no, change the questions about the university to hobbies or plans');
  if (about === 'no' || about === 'n') {
    alert('Sometimes! hahaha');
    rightAnswer++;
  } else if (about === 'yes' || about === 'y') {
    alert('Not always! but I made some good friends there.');
  } else {
    alert('Is not a valid value.');
  }
}
about();
//question4

function career() {
  var study = prompt('Do I like my career?');
  console.log ('if the user answers no, ask why?');
  //add if else //
  if (study === 'yes' || study === 'y') {
    rightAnswer++;
    answer = 'I am lawyer, what can I say!? ';
    alert(answer);
  } else if (career === 'no' || career === 'n') {
    answerNegative = 'It have good and bad things! ';
    alert(answerNegative);
  } else {
    alert('Try to write a valid value.');
  }
}
career();
//question5

function vacation() {
  var vacation = prompt('Do I have plans to take a vacation after CodeFellows?');
  if (vacation === 'yes' || vacation === 'y') {
    PlaceToGo = 'off course! we gonna need it!';
    alert(PlaceToGo);
  } else if (vacation === 'no' || vacation === 'n') {
    rightAnswer++;
    StayHome = 'I gonna spend the day sleeping! ZzZzZzZ ';
    alert(StayHome);
  } else {
    alert('That is not a right value');
  }
}
vacation();
//question6

//guessing number

function moved() {
  var numberOfTries = 3;
  var moving = 6;

  while (numberOfTries > 0){
    var guess = parseInt(prompt('How many times did I move in the past 10 years? You have ' + numberOfTries + ' guesses.')); // become user answer into a numeric value
    if (guess > moving) {
      numberOfTries--;
      alert('Too high. You have ' + numberOfTries + ' left.');
      console.log('if the guess is higher than moving variable let the user know the answer is to high.');
    } else if (guess < moving) {
      numberOfTries--;
      alert('Too low. You have ' + numberOfTries + ' left.');
      console.log('if the guess is lower than moving variable ler the user know the answer is too low');
    } else if (guess === moving){
      alert('Yes! That is CORRECT!');
      numberOfTries = -1;
      console.log('If the guess is equal to moving variable the answer is correct');
    } else {
      alert('Please write a number, that is not a correct value.');
    }
  }
}
moved();

//state or cities guess

function places() {
  var states = ['Alicante' , 'Quintana Roo' , 'Washington' , 'Madrid'];
  var stateGuesses = 4;
  var wrongAnswer = true;
  while (statesGuesses > 0) {
    var userAnswer = prompt('In which of this states do I have lived in the past?.');
    for (var i = 0; i < states.length; i++) {
    } if (userAnswer === states[i]) { // compare user answer with my "right answer".
      alert ('yes! that is correct!');
      stateGuesses = -1;
      wrongAnswer = false;
      break;
    } else if (userAnswer !== states [i]) {
      alert ('you have ' + stateGuesses + 'to keep trying.');
      stateGuesses--;
    } else (
      alert('Is not a correct value. ')
    );

    if (wrongAnswer === true)
      alert('I lived in ' + states[0] + ',' + states[1] + ',' + states[2] + '.');
  }
}
places();
