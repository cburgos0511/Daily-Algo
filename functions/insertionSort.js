const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let valToInsert = arr[i];
    let holePosition = i;

    while (holePosition > 0 && arr[holePosition - 1] > valToInsert) {
      arr[holePosition] = arr[holePosition - 1];
      holePosition--;
    }

    arr[holePosition] = valToInsert;
  }
  return arr;
};

