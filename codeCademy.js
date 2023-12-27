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
//Race Day
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let registrationStatus = true;
let runnerAge = 22;
if(runnerAge > 18 && registrationStatus) {
  raceNumber += 1000;
};
let registerEarly = true;
if(runnerAge > 18 && registerEarly){
  console.log(`${raceNumber}: You will race at 9:30`); 
};
//Race Day
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let registrationStatus = true;
let runnerAge = 18;
if(runnerAge > 18 && registrationStatus) {
  raceNumber += 1000;
};
let registerEarly = true;
if(runnerAge > 18 && registerEarly){
  console.log(`${raceNumber}: You will race at 9:30`); 
} else if(runnerAge > 18 && !registerEarly){
  console.log(`${raceNumber} will race at 11:00 am.`);
} else if(runnerAge < 18){
  console.log(`${raceNumber}: you will race at 12:30`)
} else {
  console.log('See the registration desk')
};
//list with same followers
const bobsFollowers = ['george', 'max', 'felix', 'marc'];
const tinasFollowers = ['george', 'belle', 'max'];
const mutualFollowers = [];
for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);
