function kaliTerusRekursif(angka) {
    // you can only write your code here!
    angka = String(angka)
    var kali = 1
    if(angka.length == 1){
        return Number(angka)
    }
    else{
        return kaliTerusRekursif(totalDigitRekursif(Number(angka)))
    }
}
function totalDigitRekursif(num) {
    // you can only write your code here!
    num = String(num)
    if (num == ''){
        return 1
    }
    else{
        return Number(num[0]) * totalDigitRekursif(num.slice(1))
    }
    
    
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6