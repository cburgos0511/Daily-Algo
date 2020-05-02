const maskify = (str) => {
    if(str.length < 5) return str

    let  secret = ''
    for(let i = 0; i < str.length; i++){
        if(i < str.length - 4) {
            secret += '#'
        } else {
            secret += str[i]
        }
    }
    return secret
}
