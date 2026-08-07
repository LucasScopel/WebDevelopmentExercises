const range = (start, end, step = start < end ? 1 : -1) => {
  let numbers = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) numbers.push(i);
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) numbers.push(i);
  }

  return numbers;
};

const sum = (numbers) => {
  let accumulation = 0;

  for (let number of numbers) accumulation += number;

  return accumulation;
};

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
