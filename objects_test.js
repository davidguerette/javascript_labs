// test of object prototypes & iterating over array

function NintendoCharacter(firstName, lastName, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
}

var samus = new NintendoCharacter('Samus', 'Aran', 'Female');
var luigi = new NintendoCharacter('Luigi', 'Mario', 'Male');
var mario = new NintendoCharacter('Mario', 'Mario', 'Male');
var nintendoCharacters = [samus, luigi, mario];

for (var i = 0; i < nintendoCharacters.length; i++){
  var character = nintendoCharacters[i];
  console.log("Character " + (i + 1) + ": " + character.firstName
    + " " + character.lastName + " (" + character.gender + ")");
}
