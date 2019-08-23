/*
================
urutanAngkaUlang
================
adalah sebuah program yang berfungsi untuk mengurutkan angka dari ulang
setelah mencapai batas tertentu dalam bentuk array multidimensi
contoh:
input = 9
maka outputnya : 
[ 
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], // baris ke-1 dimulai dari angka 1
  [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ], // baris ke-2 dimulai dari angka 2
  [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
  [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
  [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
  [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
  [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] 
]
perhatikan bahwa angka tersebut akan kembali ke angka awal = 1 
bila telah mencapai batasnya yaitu angka 9
input = 6
maka outputnya : 
[ 
  [ 1, 2, 3, 4, 5, 6 ],
  [ 2, 3, 4, 5, 6, 1 ],
  [ 3, 4, 5, 6, 1, 2 ],
  [ 4, 5, 6, 1, 2, 3 ],
  [ 5, 6, 1, 2, 3, 4 ],
  [ 6, 1, 2, 3, 4, 5 ] 
]
*/
function urutanAngkaUlang(angka) {
    var arr = []
    var hasil = []
    for(var i = 1 ; i<=angka ; i++){
        arr.push(i)
    }
    for(var j = 0 ; j<angka ; j++){
        var penampung = []
        for(var k = j ; penampung.length < angka ; k++){
            if (k == angka){
                k = 0
            }
            penampung.push(arr[k])
        }
        hasil.push(penampung)
    }
    return hasil
}

  console.log(urutanAngkaUlang(9));
  /*
  [ 
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
    [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
    [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
    [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
    [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] 
  ]
  */
  console.log(urutanAngkaUlang(6));
  /*
  [ 
    [ 1, 2, 3, 4, 5, 6 ],
    [ 2, 3, 4, 5, 6, 1 ],
    [ 3, 4, 5, 6, 1, 2 ],
    [ 4, 5, 6, 1, 2, 3 ],
    [ 5, 6, 1, 2, 3, 4 ],
    [ 6, 1, 2, 3, 4, 5 ] 
  ]
  */
