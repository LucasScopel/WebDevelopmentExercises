const loop = (initialValue, testFunction, updateFunction, bodyFunction) => {
  let currentValue = initialValue;

  while (testFunction(currentValue)) {
    bodyFunction(currentValue);
    currentValue = updateFunction(currentValue);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
