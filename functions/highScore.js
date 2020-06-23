const highScore = (word) => {
   const arr = word.split(" ");
   const alpha = "abcdefghijklmnopqrstuvwxyz";
   let win = {
      word: 0,
      score: "",
   };

   for (let w of arr) {
      let score = 0;
      let word = "";
      word = w;
      for (let char of w) {
         score += alpha.indexOf(char);
      }

      if (win.score < score) {
         win.score = score;
         win.word = word;
      }
   }

   return win.word;
};

console.log(highScore("man i need a taxi up to ubud"));
