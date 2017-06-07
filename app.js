var userName = 'userName';

var userName = prompt('What is your name?');
alert('Very nice to meet you ' + userName );
console.log('when asked user name, always respond')

var university = prompt('What university did you attend?');
alert('Oh, amazing!');
console.log('when user responds about a place, respond with amazing');

var degree = prompt('Did you finish College?'); // add yes or not question//
console.log('if user did not answer, ask about something else');
if (degree === 'no') {
  NoIdont = 'I hope you know what you are doing bro!';
  alert(NoIdont);
} else if (degree === 'No') {
  NoIdoNot = 'I hope you know what you are doing!';
  alert(NoIdoNot);
} else {
  YesIdid = 'Congratulations!!!';
  alert(YesIdid);
}

var about = prompt('Did you like the university?');
console.log('if the user said no, change the questions about the university to hobbies or plans');
if (about === "no") {
  LikeIt = 'That is bad!';
  alert(LikeIt);
} else {
  DisLike = 'I love to hear that!';
  alert(DisLike);
}

var study = prompt('Do you like you career?');
console.log ('if the user answers no, ask why?');
//add if else //
if (study === "yes" || study === 'y') {
  answer = 'awesome';
  alert(answer);
} else {
  answerNegative = 'that sounds bad';
  alert(answerNegative);
}

var vacation =prompt('Are you planning to take a vacation after College?');
if (vacation === "yes") {
  PlaceToGo = 'I hope you enjoy it!';
  alert(PlaceToGo);
} else {
  StayHome = 'I love to hear that!';
  alert(StayHome);
}
