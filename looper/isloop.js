'use strict';

//Complete this algo

const helper = (node) => {
  if (!node.check) {
    node.check = 'I exist'
  }
  else {
    return true
  }
  if (node.next) {return helper(node.next)}
  else {return false}
}
const isLoop = (linkedlist) => {
  return helper(linkedlist.head)
};



/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
