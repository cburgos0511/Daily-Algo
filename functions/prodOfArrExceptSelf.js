const prodOfArrExceptSelf = arr => {
  let prod = 1;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(prod);
    prod *= arr[i];
  }
  prod = 1;
  result;

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= prod;
    prod *= arr[i];
  }

  return result;
};
