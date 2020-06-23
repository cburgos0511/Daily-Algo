function hungrySeven(arr) {
  let end = 0;
  let i = 0;
  while (end !== arr.length) {
    if (arr[i] === 7 && arr[i + 1] === 8 && arr[i + 2] === 9) {
      arr[i] = 8;
      arr[i + 1] = 9;
      arr[i + 2] = 7;

      i = 0;
      end = 0;
    } else {
      i++;
      end++;
    }
  }
  return arr;
}

//   console.log(hungrySeven([7,8,9]))

console.log(hungrySeven([7, 7, 7, 8, 9]));
