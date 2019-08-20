/*
=====
Hacktiv Mining
=====

[INSTRUCTIONS]
salesAmount adalah fungsi yang mengambil parameter:
    1. array penjualan/sales hasil tambang dari berbagai macam tambang yang dimiliki oleh perusahaan Hacktiv
    2. nama mineral yang ingin diketahui jumlah salesnya dari semua tambang-tambang tersebut.

Fungsi ini akan me-return jumlah pendapatan dari penjualan suatu mineral. 

Berikut ini adalah daftar mineral beserta harga-harganya:
    - sulfur dengan harga 10
    - silver dengan harga 30
    - malachite dengan harga 50
    - gold dengan harga 50
    - diamond dengan harga 100

[EXAMPLE]
INPUT : 
- hasil tambang: [['silver','silver','gold'], ['gold','malachite']]
- mineral yang dicari nilai penjualannya: gold

PROSES:
1. Ada 2 tambang, tambang pertama menghasilkan [silver,silver,gold] dan tambang kedua menghasilkan [gold,malachite]
2. Di semua tambang perusahaan Hacktiv, terdapat 2 biji hasil tambang gold.
3. Harga gold adalah 50, jadi hasil penjualan gold adalah 2 ⨉ 50 = 100

OUTPUT:
100

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin

*/
// Write the pseudocode here

// FUNCTION with name 'salesAmount' with parameters 'tambang', 'bahan'
//     STORE 'i' with 0
//     STORE 'j' with 0
//     STORE 'harga' with 0
//     STORE 'total' with 0

//     IF 'bahan' equals to "sulfur" THEN
//         SET 'harga' to 10
//     ELSE IF 'bahan' equals to "silver" THEN
//         SET 'harga' to 30
//     ELSE IF 'bahan' equals to "malachite" THEN
//         SET 'harga' to 50
//     ELSE IF 'bahan' equals to "gold" THEN
//         SET 'harga' to 50
//     ELSE IF 'bahan' equals to "diamond" THEN
//         SET 'harga' to 100
//     END IF

//     WHILE 'i' less than 'tambang' lenght THEN
//         WHILE 'j' less than 'tambang' index 'i' lenght THEN
//             IF 'tambang' index 'i' index 'j' equals to 'bahan' THEN
//                 SET 'total' with 'total' PLUS 'harga'
//             END IF
//             ADD 'j' with 1
//         END WHILE
//         SET 'j' with 0
//         ADD 'i' with 1
//     END WHILE
// END FUNCTION






// Write the function here

function salesAmount(tambang, bahan) {
    var i = 0
    var j = 0
    var harga = 0
    var total = 0

    if(bahan == 'sulfur') {
        harga = 10
    }
    else if(bahan == 'silver') {
        harga = 30
    }
    else if(bahan == 'malachite') {
        harga = 50
    }
    else if(bahan == 'gold') {
        harga = 50
    }
    else if(bahan == 'diamond') {
        harga = 100
    }
    console.log(bahan);
    

    while(i<tambang.length){
        while(j<tambang[i].length){
            if(tambang[i][j] == bahan){
                total += harga
            }
            j++
        }
        j=0
        i++
    }
    return total
}






var tambangA = [
    ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
    ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold']
  ]
  console.log(salesAmount(tambangA, 'gold')); // 200
  
  var tambangB = [
    ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
    ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
    ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
  ]
  console.log(salesAmount(tambangB, 'diamond')); // 600
  
  var tambangC = [
    [],
    ['sulfur', 'sulfur', 'silver', 'gold'],
    ['gold', 'diamond']
  ]
  console.log(salesAmount(tambangC, 'sulfur')) // 20
  