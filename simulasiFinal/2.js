//soal 2

/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    |-n
    |o|
    n-|

  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
    - Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
    - Minimal panjang karakter yang diinput adalah 3. Tampilkan 'Invalid input' jika kondisi ini tidak terpenuhi.
*/

function diagonAlley(word) {
    // code here
    if (word == "no"){
      console.log("Invalid input");
    }
    else{
      for(var i = 0 ; i<word.length ; i++){
        var hasil = ''
          for(var j = word.length-1 ; j>=0 ; j--){
              if(j == i){
                  hasil += word[i]
              }
              else if (j == 0 || j == word.length-1){
                  hasil += "|"
              }
              else{
                  hasil += "-"
              }
          }
          console.log(hasil);
      }
    }
  }
  
  
  // TEST CASES
  
  diagonAlley('kuroko')
  /*
    |----k
    |---u|
    |--r-|
    |-o--|
    |k---|
    o----|
  */
  console.log('')
  
  diagonAlley('non')
  /*
    |-n
    |o|
    n-|
  */
  console.log('')
  
  diagonAlley('basuke')
  /*
    |----b
    |---a|
    |--s-|
    |-u--|
    |k---|
    e----|
  */
  console.log('')
  
  diagonAlley('no')
  console.log('')
  // Invalid input