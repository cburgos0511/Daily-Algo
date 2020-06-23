const mergeSort = arr => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let  right = arr.slice(mid)

    left = mergeSort(left)
    right = mergeSort(right)
    left
    return merge(left, right)
  };

  const merge = (l, r ) => {
    let sorted = []

    while(l.length > 0 && r.length > 0) {
        if(l[0] < r[0]){
            let firstLeft = l.shift();
            sorted.push(firstLeft);
        } else {
            let firstRight = r.shift();
            sorted.push(firstRight)
        }
    }

    for(let i = 0; i < l.length; i++){
        sorted.push(l[i])
    }

    for(let i = 0; i < r.length; i++){
        sorted.push(r[i])
    }
    return sorted

  }