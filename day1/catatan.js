function factorial (angka) {
    if (angka === 0 || angka === 1) { // BASE CASE
      return 1
    }
    var berikutnya = angka - 1
    return angka * factorial(berikutnya)
  }
  
  console.log(factorial(4))
  
  function sum(array) {
    if (array.length === 0) { // BASE CASE
      return 0
    }
    var berikutnya = array.slice(1)
    return array[0] + sum(berikutnya)
  }
  
  console.log(sum([1, 2, 4, 9])) // 16