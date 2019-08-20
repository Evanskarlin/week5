function exp (base, result) {
    if(result == 1){
        return 0
    }
    else if (result%base != 0){
        return "bukan pangkat"
    }
    else{
        if (typeof exp(base, result/base) == "number"){
            return 1 + exp(base, result/base)
        }
        else {
            return exp(base, result/base)
        }
    }
}
console.log(exp(2,8))
