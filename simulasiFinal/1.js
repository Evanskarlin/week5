//soal 1

/* 
Buatlah sebuah function yang menerima parameter array of numbers.

Function tersebut akan mereturn numbers dengan kondisi:
  - terurut dari yang terbesar
  - terfilter hanya yang diatas atau sama dengan rata-rata


RULES:
  - dilarang menggunakan built-in function apapun selain .push


CONTOH:

INPUT:
  [2, 3, 5, 5, 6, 7]

PROCESS:
  - rata-ratanya adalah 4.67
  - yang diatas atau sama dengan rata-rata [5, 5, 6, 7]
  - lalu diurut dari yang terbesar

OUTPUT: 
  [7, 6, 5, 5]
*/


function sortAndFilterAboveMean(numbers) {
  for (var i = 0 ; i<numbers.length ; i++){
    var penampung = 0
    var rata = 0
    var hasil = []
    for (var j = 0 ; j<numbers.length ; j++){
    rata += numbers[i]
      if (numbers[i] > numbers[j]){
          penampung = numbers[i]
          numbers[i] = numbers[j]
          numbers[j] = penampung
      }
    }
  }
  
  rata = rata/numbers.length
  for (var k = 0 ; k<numbers.length ; k++){
    if (numbers[k] >= rata){
        hasil.push(numbers[k])
    }
  }
  return hasil

}

console.log(sortAndFilterAboveMean([2, 3, 5, 5, 6, 7])) // [ 7, 6, 5, 5 ]

console.log(sortAndFilterAboveMean([1, 10, 3, 9, 1, 4, 10])) // [ 10, 10, 9 ]

console.log(sortAndFilterAboveMean([45, 2, 8, 22, 3, 9])) // [ 45, 22 ]

console.log(sortAndFilterAboveMean([3, 5, 2, 6])) // [ 6, 5 ]