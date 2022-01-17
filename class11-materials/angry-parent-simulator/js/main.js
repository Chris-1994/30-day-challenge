document.querySelector("#yell").addEventListener("click", run);

function run() {
  let fname = document.querySelector("#firstName").value;
  let fmiddle = document.querySelector("#firstMiddle").value;
  let ffmiddle = document.querySelector("#lastMiddle").value;
  let lastname = document.querySelector("#lastName").value;
  text = `${fname} ${fmiddle} ${ffmiddle} ${lastname}`;
  document.querySelector("#placeToYell").innerText = text;
}

// create a run function get names , change innertext to the name information

// document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//Add what you should be doing - conditionals go here

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
