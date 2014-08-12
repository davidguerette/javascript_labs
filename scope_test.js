// exploring var scope:

// if var is defined outside of function, it's a global variable
var global = "Marsha, Marsha, Marsha!"

function readGlobal(){
  return global;
}

function setGlobal(newVal){
  global = newVal
}

function Obj(){
  this.getGlobal = function(){
    return global;
  }

  this.setGlobal = function(newVal){
    global = newVal;
  }
}

var person = new Obj();

//these will return the same global value:
console.log(global);
console.log(readGlobal());
console.log(person.getGlobal())


//exploring lexical scope & closure

function CokeBottle(size){
  var mixture = [];

  function addWater(){
    mixture.push('water');
  }

  function addSugar(){
    mixture.push('sugar');
  }

  function addMagicFormula(){
    mixture.push('magic formula');
  }

  addWater;
  addSugar;
  addMagicFormula;
  this.mixture = mixture;
}

var coke = new CokeBottle(24);
