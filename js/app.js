'use strict';

var userName = prompt('what\'s your name?');
alert('welcome'+ '  '+userName+'  '+'to my web site..');
alert('please, answer the next questions by yes/no or y/n');

//__________________________________________________________________________

let answer1 = prompt('Is  BMW my favorite car company?').toLowerCase();
  if (answer1 === 'y' || answer1 === 'yes') {
    alert('your answer is True');
    console.log('your answer is True')
  }
  else if (answer1 === 'no' || answer1 === 'n') {
   
    alert('your answer is wrong');

    console.log('your answer is wrong')
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }

//__________________________________________________________________________
let answer2 = prompt('Is blue my favorite color?').toLowerCase();

  if (answer2 === 'y' || answer2 === 'yes') {
    alert('your answer is wrong');
   // console.log('your answer is wrong')
  }
  else if (answer2 === 'no' || answer2 === 'n') {
    alert('your answer is True');
     //console.log('your answer is True')
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }
//__________________________________________________________________________

let answer3 = prompt('Am I studying at Zarqa University?').toLowerCase();
  if (answer3 === 'y' || answer3 === 'yes') {
    alert('your answer is True');
    //console.log('your answer is True')
  }
  else if (answer3 === 'no' || answer3 === 'n') {
    alert('your answer is Wrong');
     //console.log('your answer is wrong')
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }
//__________________________________________________________________________


let answer4 = prompt('Do I like the summer?').toLowerCase();

  if (answer4 === 'y' || answer4 === 'yes') {
    alert('your answer is Wrong');
     //console.log('your answer is wrong')
  }
  else if (answer4 === 'no' || answer4 === 'n') {
    alert('your answer is True');
 //console.log('your answer is True')
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }


//__________________________________________________________________________

    let answer5 = prompt('Do I love draw').toLowerCase();
  if (answer5 === 'y' || answer5 === 'yes') {
    alert('your answer is True');
     //console.log('your answer is True')

  }
  else if (answer5 === 'no' || answer5 === 'n') {
    alert('your answer is Wrong');
     //console.log('your answer is wrong')
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }
//__________________________________________________________________________

alert('Thanks '+userName+'for your answers, your score is');