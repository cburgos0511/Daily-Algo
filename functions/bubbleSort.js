const bubble = arr => {
  let swaped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    swaped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!swaped) break;
  }
  return arr;
};

console.log(bubble([4, 45, 34, 65, 12, 33, 45, 34, 60]));
