function halvingSum(n) {
    let sum = n
    while(n >= 1) {
      n = Math.floor(n / 2)
      sum += n
    }
    return sum
}
