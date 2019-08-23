function hitungKata (str) {
    if(str == ''){
        return 1
    }
    else{
        if (str[0] == ' '){
            return 1 + hitungKata(str.slice(1))
        }
        else{
            return hitungKata(str.slice(1))
        }
    }
 }console.log(hitungKata('I have a dream'));