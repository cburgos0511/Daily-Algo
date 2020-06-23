function multiplyAndFilter(arr, mult) {
   let result = [];
   for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
         result.push(arr[i] * mult);
      }
   }
   return result;
}
