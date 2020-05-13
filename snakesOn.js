const snakesOn = (aPlane) => {
   let arr = [];

   for (let ar of aPlane) {
      console.log(ar);

      for (let a of ar) {
         console.log(a);

         if (!arr.includes(a)) {
            console.log(arr.includes(a));
            arr.push(a);
         }
      }
   }
   return arr.length - 1;
};

console.log(
   snakesOn([
      "_A_AAAAA__".split(""),
      "_AA____AAA".split(""),
      "D_AA_____A".split(""),
      "DD_AAAAA_A".split(""),
      "_D_____AAA".split(""),
   ])
); //2
