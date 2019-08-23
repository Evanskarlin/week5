// 1)
// input: 4 (minimum 4, maksimal 9)
//  *******
//   *   *
//    * *
//     *
// input: 6
// ***********
//  *       *
//   *     *
//    *   *
//     * *
//      *

function segitiga (angka){
    var hasil = ''
    var spasi = 0
    var length = (angka*2)-1
    for(var i = 0 ; i<length; i++){
        hasil += "*"
    }
    for(var k = 0 ; k<angka-1 ; k++){
        hasil += "\n"
        spasi += 1
        for(var j = 0 ; j<length ; j++){
            if (j == spasi || j == (length-1-spasi)){
                hasil += "*"
            }
            else{
                hasil += " "
            }
        }
    }
    return hasil
}

console.log(segitiga(6));


// 2) 
// input: [ 2, 7, 2, 7, 7, 2, 5 ] 
// output: 3

function modus (arr){
    var terbanyak = 0
    for(var i = 0 ; i < arr.length ; i++){
        var count = 0
        for(var j = 0 ; j < arr.length ; j++){
            if (arr[i] == arr[j]){
                count++
            }
        }
        if (count > terbanyak){
            terbanyak = count
        }
    }
    return terbanyak
}

console.log(modus([ 2, 7, 2, 7, 7, 2, 5 ] ));


// 3)
function cariPelaku(str) {
  //REKURSIF
  if(str == ''){
    return 0
  }
  else{
      if (str.slice(0,3) == 'abc'){
        return 1 + cariPelaku(str.slice(1))
      }
      else{
        return cariPelaku(str.slice(1))
      }
  }
}
// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2