const iqTest = (str) => {
   let hash = {};
   let arr = str.split(" ").map((a) => parseInt(a));
   for (let n of arr) {
      hash[n] = 1 || hash[n] + 1;
   }
   if (Object.keys(hash).length <= 2) {
      return findDiff(arr);
   } else {
      return diff(arr);
   }
};

const findDiff = (arr) => {
   let diff = [];
   let curr = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (curr !== arr[i]) {
         diff.push(i);
      }
   }
   return diff.length > 1 ? 1 : diff[0] + 1;
};
const diff = (arr) => {
   let d1 = 0;

   let maj = more(arr);

   if (maj === true) {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 !== 0) {
            d1 = i + 1;
         }
      }
   } else {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 === 0) {
            d1 = i + 1;
         }
      }
   }

   return d1;
};
const more = (arr) => {
   let even = 0,
      odd = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[0] % 2 === 0) {
         even++;
      } else {
         odd++;
      }
   }
   return even > odd ? true : false;
};
console.log(iqTest("2 4 6 8 10 12 14 12 16 4 20 23 24"));
