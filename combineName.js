const combineName = (arr) => {
   if (arr.length === 0) return "";
   let output = "";
   let newArr = arr.map((name) => name.name);
   if (newArr.length <= 1) return newArr[0];

   for (let i = newArr.length - 1; i >= 0; i--) {
      if (i === newArr.length - 1) {
         output = " & " + newArr[i] + output;
      } else if (i === 0) {
         output = newArr[i] + output;
      } else {
         output = ", " + newArr[i] + output;
      }
   }

   return output;
};

console.log(combineName([{ name: "Cruz" }, { name: "Asher" }]));
