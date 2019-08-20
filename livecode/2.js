// "use strict"
/*
============
dataSiswa
============

[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.

Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.


[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"


[RULES]
1. Dilarang menggunakan built-in split

*/


function dataSiswa(scoreRecord) {
  // Your code here.
  var data = []
  var penampung = ''
  var hasil = []
  var angka = 0
  data.push([])
  for(var i = 0 ; i<scoreRecord.length ; i++){
    if (scoreRecord[i] == '-' || scoreRecord[i] == ','){
        data.push([])
    }
    else {
        data[data.length-1].push(scoreRecord[i])
    }
  }
  for(var j = 0 ; j<scoreRecord.length ; j++){
    // for(var k = 0 ; k<scoreRecord[j].length ; k++){
        var obj = {}
        obj['id'] = data[angka].join("")
        obj['name'] = data[angka+1].join("")
        obj['score'] = data[angka+2].join("")
        hasil.push(obj)
        angka += 3
    // }
  }
  return hasil
}


console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
/* 
[
  { id: '001', name: 'Radith', score: 5 },
  { id: '002', name: 'Putra', score: 92 },
  { id: '003', name: 'Levy', score: 100 }
]
 */

console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 70 },
  { id: '003', name: 'Levy', score: 65 },
  { id: '004', name: 'Radinka', score: 88 },
  { id: '005', name: 'Bagas', score: 90 }
]
 */

console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini