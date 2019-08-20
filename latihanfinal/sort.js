// mengurutkan number dan huruf dari paling kecil ke paling besar
function sort (arr) {
    var lama = 0
    for(var i = 0 ; i<arr.length-1 ; i++){
        for(var j = 0 ; j<arr.length ; j++){
            if (arr[j]> arr[j+1]){
                lama = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = lama
            }
        }
    }
    return arr
}

var arr = ['b', 'a', 'c', 'd']

console.log(sort(arr));
