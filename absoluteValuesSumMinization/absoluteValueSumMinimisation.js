const absoluteValuesSumMinimisation = (a) => {
  const isEven = a.length % 2 === 0; //checking if the given numbers are in even

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
};

console.log(absoluteValuesSumMinimisation([2, 4, 7])); //o/p: 4
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6])); // o/p: 4
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6, 6])); // o/p: 7
console.log(absoluteValuesSumMinimisation([2, 4, 7, 6, 6, 8])); // o/p: 7
