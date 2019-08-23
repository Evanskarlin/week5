// 1)
// buat algoritma nya juga
//
// input: 4 (minimum 3, maksimal 6)
//
// |----|
// |    |
// |    |
// |----|
//
// input: 3
// |---|
// |   |
// |---|

function kotak (angka){
    var hasil = ''
    if(angka < 3){
        return "minimum 3"
    }
    else if(angka > 6){
        return "maksimal 6"
    }
    for (var i = 0; i < angka; i++) {
        if (i == 0){
            hasil += "|----| \n"
        }
        else if(i == angka-1){
            hasil += "|----|"
        }
        else{
            hasil += "|    | \n"
        }
        
    }
    return hasil
}

console.log(kotak(6));


// 2)
// TIDAK BOLEH MENGGUNAKAN SPLIT DAN JOIN
// input: 'iphone,samsung,xiaomi,samsung,samsung,xiaomi'
//
// output: 'samsung(3), xiaomi(2), iphone(1)'
//

function handphone (merk){
    var penampung = []
    var arr = []
    var kata = ''
    var hasil = ''
    for(var i = 0 ; i<=merk.length ; i++){
        if (merk[i] == "," || merk[i] == undefined){
            arr.push(kata)
            kata = ''
        }
        else{
            kata += merk[i]
        }
    }
    for(var j = 0 ; j < arr.length ; j++){
        var count = 0
        if (penampung.indexOf(arr[j]) == -1){
            penampung.push(arr[j])
            for(var k = 0 ; k < arr.length ; k++){
                if (arr[j] == arr[k]){
                    count++
                }
            }
            hasil += ', ' + arr[j] + '(' + count + ')'
        }
    }
    return hasil.slice(2)
}

console.log(handphone('iphone,samsung,xiaomi,samsung,samsung,xiaomi'));

//
// 3)
// input: 'saya naik civic sambil menatap katak'
// output: {
//   palindrome: ['civic', 'katak'],
//   nonPalindrome: ['saya', 'naik', 'sambil', 'menatap']
// }

function palin (kalimat){
    var arr = kalimat.split(' ')
    var palindrome = []
    var nonpalindrome = []
    var obj = {}
    for(var i = 0 ; i<arr.length ; i++){
        var baru = ''
        for(var j = arr[i].length-1 ; j>=0 ; j--){
            baru += arr[i][j]
        }
        if(arr[i] == baru){
            palindrome.push(arr[i])
        }
        else{
            nonpalindrome.push(arr[i])
        }
    }
    obj["palindrome"] = palindrome
    obj["nonpalindrome"] = nonpalindrome
    return obj
}

console.log(palin('saya naik civic sambil menatap katak'));
