// mengambil elemen pada array dari index ke x sampai ke y-1, jika y kosong maka elemen array akan diambil sampai akhir
function slice(arr, x, y) {
    var arrbaru = []
    if(y == undefined){
        for(var i = x ; i<arr.length ; i++){
            arrbaru[i-x] = arr[i]
        }
    }
    else{
        for(var i = x ; i<y ; i++){
            arrbaru[i-x] = arr[i]
        }
    }
    return arrbaru
}

var arr= [0, 1, 2, 3, 4, 5]

console.log(slice(arr, 1, 4));
