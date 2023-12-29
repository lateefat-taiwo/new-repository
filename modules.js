const amount = 16;

if(amount < 10){
  console.log('small number');
}
else{
  console.log('large number');
}

console.log(`hey it's my first node app!!!`);
//  setInterval(() => {
//    console.log('hello world!');
//  }, 1000)
// console.log(__dirname);
const names = require('./names')
const sayHi = require('./util')
const data = require('./alternative-route')
require('./mind-grenade')
console.log(data);

//  sayHi('susan')
//  sayHi(names.john)
//  sayHi(names.peter)