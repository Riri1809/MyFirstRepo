let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
  else if (season === 'fall'){
    console.log('It\'s fall! Leaves are falling!'); 
} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}
//eightBall game
userName = '';
userName ==='Jane' ? console.log('Hello, Jane') : console.log('Hello!'); 
const userQuestion ='what do you like?';
console.log(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';
switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'answer unavailable';
  break;
}
console.log(eightBall);
