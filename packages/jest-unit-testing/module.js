// module.js
function sum(a, b) {
  return a + b;
}

function div (a, b){
  return a / b;
}

// Given function treated white space as a 0 resulting in true 
function containsNumbers(text){
  for (let i = 0; i < text.length; i++) {
    const c = text.charAt(i);
    if (!isNaN(c) && !/\s/g.test(c))
      return true;
  }
  return false;
}

export default {sum, div, containsNumbers};
