const alphabetPosition = str => {
    let a = 'abcdefghijklmnopqrstuvwxyz'
    str = str.toLowerCase()
    let s = []
    for(let i = 0; i < str.length; i++){
      if(a.includes(str[i].toLowerCase())){
            s.push(a.indexOf(str[i]) + 1)
        }
    }
    return s.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))