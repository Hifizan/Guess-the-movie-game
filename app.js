console.log('GUESS THE MOVIE GAME');


const favMovie ='golmal';
let guess = prompt('Guess my favourite movie');

while((guess !== favMovie) && (guess !== 'quit')){
    guess = prompt('Wrong answer, please try again');
}

if (guess === favMovie){
    alert('Congratulations you have guessed correctly');
}
else if (guess === 'quit'){
    alert('You have quitted the game');
}