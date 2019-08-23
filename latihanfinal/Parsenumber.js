/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.
  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1
  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parse (angka){
    angka = String(angka)
    if(angka.length == 1){
        return angka[0]
    }
    else{
        return String(Number(angka)-Number(angka.slice(1))) + '+' + parse(angka.slice(1))
    }
}

console.log(parse(4321));