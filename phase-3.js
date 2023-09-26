const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time('timer');
  let results = [];
  for (let i = 1; i <= 10; i ++) {
    results.push(addNums(i * increment))
    console.timeLog('timer');
  }
  console.timeEnd('timer');
  return results;
  
}


function addManyNums10Timing(increment) {
  console.time('timer');
  let results = [];
  for (let i = 1; i <= 10; i++) {
    results.push(addManyNums(i * increment))
    console.timeLog('timer');
  }
  console.timeEnd('timer');
  return results;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);