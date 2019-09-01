// input:
// [
//   ['2', '3', '4'],
//   ['5', '7', '11'],
//   ['2', '13', '23']
// ]
// output:
// 3
// penjelasan: cari prima di dalam blok 2x2

function primakotak (arr){
    var hasil = 0
    for(var i = 0 ; i<arr.length-1 ; i++){
        for(var j = 0 ; j<arr[i].length-1 ; j++){
            var count = 0
            for(var k = 2 ; k<arr[i][j]-1 ; k++){
                if(arr[i][j]%k == 0){
                    count++
                }
            }
            for(var k = 2 ; k<arr[i][j+1]-1 ; k++){
                if(arr[i][j+1]%k == 0){
                    count++
                }
            }
            for(var k = 2 ; k<arr[i+1][j]-1 ; k++){
                if(arr[i+1][j]%k == 0){
                    count++
                }
            }
            for(var k = 2 ; k<arr[i+1][j+1]-1 ; k++){
                if(arr[i+1][j+1]%k == 0){
                    count++
                }
            }
            if(count == 0){
                hasil++
            }
        }
    }
    return hasil
}


var input = 
[
  ['2', '3', '4'],
  ['5', '7', '11'],
  ['2', '13', '23']
]
console.log(primakotak(input));
