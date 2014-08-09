function getSwatCount(animal){
  if(animal === 'squirrel'){
    return 5;
  }
  else {
    return 3;
  }
}

function momoReacts(timesToSwat){
  console.log("Momo the cat waits by the door");
  console.log("Momo the cat growls as something approaches on the other side");
  for(var i = 0; i < timesToSwat; i++){
    console.log("Momo the cat swats under the door, missing her target");
  }
  console.log("Momo the cat resigns to waiting for the door to open");
}

console.log("Momo, a squirrel appraoches!");
momoReacts(getSwatCount('squirrel'));
