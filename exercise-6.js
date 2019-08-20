function meleeRangedGrouping (str) {
    //your code here
    arr = str.split(",")
    var hasil = []
    var kelas = []
    if (str == ''){
        return hasil
    }
    hasil.push([], [])
    for(var i = 0 ; i<arr.length ; i++){
        var count = 0
        var namai = arr[i].split("-")
        for(var k = 0 ; k<kelas.length ; k++){
            if (namai[1] == kelas[k]){
                count ++
            }
        }
        if (count == 0){
            
            for(var j = 0 ; j<arr.length ; j++){
                var namaj = arr[j].split("-")
                if (namai[1] == namaj[1]){
                    hasil[0].push(namaj[0])
                    kelas.push(namaj[1])
                }
                else{
                    hasil[1].push(namaj[0])
                    kelas.push(namaj[1])
                }
            }
        }

    }
    return hasil
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []