const altCap = (str) => {
  let even = "",
    odd = "";
    for(let i = 0 ; i < str.length; i++){
        if(i %2 ===0){
            even+=str[i].toUpperCase()
        } else {
            even+= str[i]
        }
    }
    for(let i = 0 ; i < str.length; i++){
        if(i %2 ===1){
            odd+=str[i].toUpperCase()
        } else {
            odd+= str[i]
        }
    }
  return [even, odd];
};

module.exports = altCap;
