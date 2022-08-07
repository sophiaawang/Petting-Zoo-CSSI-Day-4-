console.log("script running!");
let happiness = 100;
let energy = 100;
const buttonA = document.querySelector("#buttonA");
buttonA.addEventListener("click", e => {
  console.log("button A pressed");
  const tippyStatus = document.querySelector("#status1");
  happiness +=10;
  energy -=10;
  tippyStatus.innerHTML = "He may bleat, but he won't bite! Happiness is "+ happiness +" and Energy is " + energy;
  
});

const button1 = document.querySelector("#button1");
button1.addEventListener("click", e => {
  console.log("button 1 pressed");
  alert("Meh-eh-eh-eh-eh");
});


//button 2: brodie
//change text when button is pressed
const button2 = document.querySelector("#button2");
button2.addEventListener("click", e=> {
  console.log("button 2 is pressed");
  const brodyStatus = document.querySelector("#status2");
  brodyStatus.innerHTML = "Thanks for petting Brody!!! He looks super happy :D";
});

//button 3: coco
// add 1 to the num of carrots when button is pressed
let carrots = 2;
const button3 = document.querySelector("#button3");
button3.addEventListener("click", e =>{
  console.log("button 3 is pressed");
  carrots += 1;
  const cocoStatus = document.querySelector("#status3");
  cocoStatus.innerHTML = "Coco has had " + carrots + " carrots today.";
  if (carrots >= 20){
    cocoStatus.innerHTML = "Coco has had too many carrots!!!";
    document.querySelector('#button3').disabled = true;
    alert("Stop");
  }
});

//button 4: arno
// remove rest of content 
// add a warning message
let n = 0;
const button4 = document.querySelector("#button4");
button4.addEventListener("click", e =>{
  console.log("button 4 is pressed");
  const container = document.querySelector(".container");
  n ++;
  if(n> 0 && n <= 1)
  {
  button4.innerHTML = "are you sure?"}
  else if( n > 1)
  container.innerHTML = "<h1 class='title'>Due to some dangerous rulebreaking, the petting zoo has been closed</h1>";
});

// Pancho the axolotl
// same thing as Coco
let worms = 1;
const button5 = document.querySelector("#button5");
button5.addEventListener("click", e =>{
  console.log("button 5 is pressed");
  worms += 1;
  const ponchoStatus = document.querySelector("#status5");
  ponchoStatus.innerHTML = "Poncho has had " + worms + " worms today.";
  
});