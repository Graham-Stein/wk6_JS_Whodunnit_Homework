
// ###EPISODE 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// ### Miss Scarlet because murderer is accessible within the
// scenario object despite the object it'self being  a const


// Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// Fails because murdrer is a constant string ('Professor Plum')
// and can't be modified by changeMurderer
//
// Episode 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// firstVerdict Mrs Peacock, because the murdrer variable is reassigned to 'Mrs.
// Peacock', but only locally (as it is let murderer), so secondVerdict remains
// Professor Plum.

// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// List of suspects is returned from declareAllSuspects and const variable 'suspects'
// is available to be displayed, so we see the list (Scarlet, Plum, Mustard).
// suspectThree is still available and so can be logged out giving Mrs Peacock

// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// weapon is reassigned (revolver in place of Candle Stick) by changeWeapon
// function. This works because weapon is an attribute in the const scenario
// object
//

// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Calling changeMurderer in turn calls plotTwist and reassigns Mrs White to
// murderer, who is then logged out when declareMurderer assigns her name to verdict

// Episode 7
// ###########################################################
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// #######################################################################
// The final call of plotTwist reassigns Col Mustard to Murderer (but only as a let),
// but at the end of the block, murder is reassigned to the last set above in the
 // code which is Mr Green

// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// changeScenario is first call. This sets murderer to Mrs Peacock and room
// to dining room. The next call is plotTwist (as this is at the next item in
// the changeScenario block.) This sets the murderer to Col Mustard, as the room
// passed in is dining room which matches the scanario.room which is also dining Room
  // Next call is unexpectedOutcome which passes in Col Mustrd, which matches with
  // the current scenario.murderer so the weapon is reset to candle stick.

  // Episode 9

  // let murderer = 'Professor Plum';
  //
  // if (murderer === 'Professor Plum') {
  //   let murderer = 'Mrs. Peacock';
  // }
  //
  // const declareMurderer = function() {
  //   return `The murderer is ${murderer}.`;
  // }
  //
  // const verdict = declareMurderer();
  // console.log(verdict);

  // murderer is set to Professor Plum, and reset as a let in the if block to
  // Mrs Peacock, however, murderer then returns to Professor Plum after the if
  // statementand when murderer is subsequently called to be logged out, it is
   // Professor Plum.
