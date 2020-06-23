const sayHello = (name) => {
   let n = "";
   for (let i = 0; i < name.length; i++) {
      if (i === 0) {
         n += name[i].toUpperCase();
      } else {
         n += name[i].toLowerCase();
      }
   }
   return `Hello ${n}!`;
};

