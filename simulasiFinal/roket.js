/*
  /////
  order
  /////
  Function order ini hanya berfungsi mengurutkan number dari kecil ke besar dalam bentuk string
  dan outputnya disatukan dengan satu spasi. Apabila ada angka yang sama selalu urutkan dari paling
  kiri.

  [RULES]
  1. Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function order(words) {
    // code here
    var hasil = ''
    if (words == ''){
        return ''
    }
    var banyak = 0
    for(var k = 0 ; k<=words.length ; k++){
        if (words[k] == " " || words[k] == undefined){
            banyak++
        }
    }
    
    for(var i= 1 ; i<=banyak ; i++){
        var count = 0
        var kata = ''
        for(var j= 0 ; j<=words.length ; j++){
            if (words[j] == String(i)){
                kata += words[j]
                count++
            }
            else if(words[j] == " " || words[j] == undefined){
                if(count == 1){
                    hasil += kata + " "
                    count++
                }
                kata = ''
            }
            else{
                kata += words[j]
            }
        }
    }
    return hasil
  }
  
  console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est
  console.log(order("4of Fo-10r       pe6000ople   g3ood    th5e  the2")) // "Fo-10r the2 g3ood 4of th5e pe6000ople"
  console.log(order("i1s Thi0s m2e real1")) // "Thi0s i1s real1 2me"
  console.log(order("")) // ""