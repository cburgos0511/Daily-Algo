// Your task is to Combine two Strings. But consider the rule...

// By the way you don't have to check errors or incorrect input values, every thing is ok without bad tricks, only two input strings and as result one output string;-)...

// And here's the rule:
// Input Strings 'a' and 'b': For every character in string 'a' swap the casing of every occurance of the same character in string 'b'. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of 'a' followed by the changed version of 'b'. A char of 'a' is in 'b' regardless if it's in upper or lower case - see the testcases too.
// I think that's all;-)...

// Some easy examples:

// Input: "abc" and "cde"      => Output: "abCCde"
// Input: "ab" and "aba"        => Output: "aBABA"
// Input: "abab" and "bababa"  => Output: "ABABbababa"
// Once again for the last example - description of "KenKamau", see discourse;-):

// a) swap the case of characters in string b for every occurence that character in string a. char 'a' occurs twice in string a, so we swap all 'a' in string 'b' twice. This means we start with "bababa" then "bAbAbA" => "bababa" char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"

// b) then, swap the case of characters in string a for every occurence in string b. char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb" char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => ABAB => AbAb => ABAB.

// c) merge new strings 'a' and 'b' return "ABABbababa"

const combineTwoStrings = (str1, str2) => {
   let mk1 = makeSet(str1);
   let mk2 = makeSet(str2);
   str1 = str1.split("");
   str2 = str2.split("");

   let done = 0;
   mk2;
   while (done <= Object.keys(mk2).length) {
      console.log(done);

      console.log(Object.keys(mk2)[done]);

      console.log(mk2[Object.keys(mk2)[done]]);

      if (mk2[Object.keys(mk2)[done]] % 2 !== 0) {
         for (let i = 0; i < str1.length; i++) {
            if (str1[i] === Object.keys(mk2)[done]) {
               str1[i] = str1[i].toUpperCase();
            }
         }
      }

      done++;
   }
   str1;

   done = 0;

   while (done < Object.keys(mk1).length) {
      console.log(mk1[Object.keys(mk1)[done]]);

      if (mk1[Object.keys(mk1)[done]] % 2 !== 0) {
         for (let i = 0; i < str2.length; i++) {
            if (str2[i] === Object.keys(mk1)[done]) {
               str2[i] = str2[i].toUpperCase();
            }
         }
      }
      done++;
   }

   return str1.join("") + str2.join("");
};

const makeSet = (str) => {
   let hash = {};
   for (let val of str) {
      hash[val] = hash[val] + 1 || 1;
   }

   return hash;
};

console.log(combineTwoStrings("abc", "cde"));
