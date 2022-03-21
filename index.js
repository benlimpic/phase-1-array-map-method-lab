const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const funct = (s) => {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      newStr = +s[i].toUpperCase();
    } else {
      newStr += s[i];
    }
  }
  return newStr;
};

const fun = (sentence) => {
  const words = sentence.split(" ");
  const newArr = words.map(funct);
  return newArr.join(" ");
};

const titleCased = () => {
  const newArr = tutorials.map(funct);
  return newArr;
};

console.log(titleCased(tutorials));

// function toTitleCase(str) {
//   return str.toLowerCase().split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// console.log(toTitleCase("welcome to w3docs"));

// let vals = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(vals);

// doubler = (x) => x * 2

// vals = vals.map(x => x * 2);
// //vals = vals.map(doubler);
// console.log(vals);
