// Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)

const nextHappyYear = year => {
  let happy = false;
  while (!happy) {
    year++;
    happy = isHappy(year);
  }
  return year;
};

const isHappy = year => {
  let y = year.toString();
  let hash = {};

  for (let dig of y) {
    hash[dig] = 1;
  }
  let len = Object.keys(hash).length;

  return y.length === len;
};
