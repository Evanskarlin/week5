// menggabungkan array menjadi string (bisa dengan pambatas)
function join (arr, simbol){
    hasil = ''
    for(var i = 0 ; i<arr.length ; i++){
        hasil += arr[i]
        if (i != arr.length-1){
            hasil += simbol
        }
    }
    return hasil
}

var arr = ['e', 'v', 'a', 'n', 's']
console.log(join(arr, "*"))