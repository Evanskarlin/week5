var cekAngka = 7

var indeks = cekAngka-1
function cekPrima (num, index) {
    if(index == 1){
        return "prima"
    }
    else{
        if(num % index == 0){
            return "bukan"
        }
        else{
            return cekPrima(num, index-1)
        }
    }
}
console.log(cekPrima(cekAngka, indeks));