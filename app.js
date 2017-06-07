var userName = 'userName';

var userName = prompt('What is your name?');
alert('Very nice to meet you ' + userName );
console.log('when asked user name, always respond')

var university = prompt('What university did you attend?');
alert('Oh, amazing!');
console.log('when user responds about a place, respond with amazing');

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
}

var about = prompt('Did I like the university?');
console.log('if the user said no, change the questions about the university to hobbies or plans');
if (about === "no") {
  LikeIt = 'Sometimes! hahaha';
  alert(LikeIt);
} else {
  DisLike = 'Not always! I made some good friends there.';
  alert(DisLike);
}

var study = prompt('Do I like you career?');
console.log ('if the user answers no, ask why?');
//add if else //
if (study === "yes" || study === 'y') {
  answer = 'I am lawyer, what can I say!? ';
  alert(answer);
} else {
  answerNegative = 'It have good and bad things! ';
  alert(answerNegative);
}

var vacation =prompt('Do I have plans to take a vacation after CodeFellows?');
if (vacation === "yes") {
  PlaceToGo = 'off course! we gonna need it!';
  alert(PlaceToGo);
} else {
  StayHome = 'I gonna spend the day sleeping! ZzZzZzZ ';
  alert(StayHome);
}
