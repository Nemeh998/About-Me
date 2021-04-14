'use strict';
var scour = 0;
var userName = prompt('what\'s your name?');
alert('welcome' + '  ' + userName + '  ' + 'to my web site..');
alert('please, answer the next questions by yes/no or y/n');

//__________________________________________________________________________
function fun1() {
    let answer1 = prompt('Is  BMW my favorite car company?').toLowerCase();
    if (answer1 === 'y' || answer1 === 'yes') {
        alert('your answer is True');
        console.log('your answer is True');
        scour++

    }
    else if (answer1 === 'no' || answer1 === 'n') {

        alert('your answer is wrong');

        console.log('your answer is wrong')
    }
    else {
        alert('you should answer yes/y or no/n, please.');
    }
}
fun1();


//__________________________________________________________________________
function fun2() {
    let answer2 = prompt('Is blue my favorite color?').toLowerCase();

    if (answer2 === 'y' || answer2 === 'yes') {
        alert('your answer is wrong');
        // console.log('your answer is wrong')
    }
    else if (answer2 === 'no' || answer2 === 'n') {
        alert('your answer is True');
        //console.log('your answer is True')
        scour++;
    }
    else {
        alert('you should answer yes/y or no/n, please.');
    }
}

fun2();
//__________________________________________________________________________
function fun3() {
    let answer3 = prompt('Am I studying at Zarqa University?').toLowerCase();
    if (answer3 === 'y' || answer3 === 'yes') {
        alert('your answer is True');
        //console.log('your answer is True')

        scour++;
    }
    else if (answer3 === 'no' || answer3 === 'n') {
        alert('your answer is Wrong');
        //console.log('your answer is wrong')
    }
    else {
        alert('you should answer yes/y or no/n, please.');
    }
}
fun3();
//__________________________________________________________________________

function fun4() {
    let answer4 = prompt('Do I like the summer?').toLowerCase();

    if (answer4 === 'y' || answer4 === 'yes') {
        alert('your answer is Wrong');
        //console.log('your answer is wrong')
    }
    else if (answer4 === 'no' || answer4 === 'n') {
        alert('your answer is True');
        //console.log('your answer is True')
        scour++;
    }
    else {
        alert('you should answer yes/y or no/n, please.');
    }
}

fun4();
//__________________________________________________________________________
function fun5() {
    let answer5 = prompt('Do I love draw').toLowerCase();
    if (answer5 === 'y' || answer5 === 'yes') {
        alert('your answer is True');
        //console.log('your answer is True')
        scour++;

    }
    else if (answer5 === 'no' || answer5 === 'n') {
        alert('your answer is Wrong');
        //console.log('your answer is wrong')
    }
    else {
        alert('you should answer yes/y or no/n, please.');
    }
}

fun5();
//__________________________________________________________________________


// guessin number by user
function fun6() {
    alert('lets play another game, guessing a number game, Good luck');


    let number = 20;

    for (let i = 1; i <= 4; i++) {

        let guessingnum = prompt('guess anumber between 0 and 50');
        if (guessingnum < number) {
            alert('to low');

        }

        else if (guessingnum > number) {
            alert('to hight');

        }
        else if (guessingnum == 20) {

            alert('great, it\'s true.');
            scour++;
            break;


        }

    }




}
fun6();



//__________________________________________________________________________




function guessColor (){
    const colorArr=['red','green','blue','yellow','gray','white','brown','skyBlue','black','orange','purple','pink','maroon','gold','bronze','silver'];
    alert('One last game, you have 6 attempts to choose the correct favorite color from list of colors');
  
    for(let i=0 ; i < 6 ; i++ ){
      var answer = prompt(`you have ${6-i} attempts: \n select a color from the list.\n which one is my favorite color?\n ${colorArr.join(' - ')}`).toLowerCase();
      if(answer=== colorArr[7]){
        alert('great, it\'s true, you won');
        scour++;
        break;
      }
    }
  }
  guessColor();


//__________________________________________________________________________







alert('Thanks' + " " + userName + " " + 'for your answers, your score is' + "  " + scour + "   " + '.\n I hope that you have enjoyed with us..');
