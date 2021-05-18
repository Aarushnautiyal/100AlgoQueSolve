// Create a add function where u can add any num given the length will be indefinate
const add = (...param) => {
  //   return param;
  let total = 0;
  param.forEach((num) => {
    total += num;
  });
  return total;
};

console.log(add(2, 3, 4, 5, 6));
