const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

const fruits = ['orange', ['apple']]
const newFruits = _.flattenDeep(fruits);
console.log(newFruits)
console.log('Hello world');

function test(age) {
  if (age < 18) {
    console.log('too young');
  } else {
    console.log('qualified')
  }
}
test(12)
