// menambahkan elemen array paling akhir
function push(arr, input){
    arr[arr.length] = input
    return arr   
}
var arr = [1, 2, 3]
console.log(push(arr, 4));
