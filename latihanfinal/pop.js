//menghapus elemen array paling akhir
function pop(arr){
    var arrbaru = []
    for(var i = 0 ; i<arr.length-1 ; i++){
        arrbaru[i]=arr[i]
    }
    return arrbaru
}

arr = [1, 2, 3, 4]
console.log(pop(arr));