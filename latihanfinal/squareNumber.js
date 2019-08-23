function squareNumber(num) {
    var hasil = []
    var angka = 0
    for(var i = 0 ; i < num ; i++){
        var penampung = []
        for(var j = 0 ; j < num ; j++){
            angka++
            if (i % 2 == 0){
                penampung.push(angka)
            }
            else{
                penampung.unshift(angka)
            }
        }
        hasil.unshift(penampung)
    }
    return hasil
  }

  
console.log(squareNumber(3));
  
  