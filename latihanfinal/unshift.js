// menambahkan elemen array paling depan
function unshift (arr, input){
    var arrbaru = [] 
    arrbaru[0] = input
    for(var i = 1 ; i<=arr.length ; i++){
        arrbaru[i] = arr[i-1]
    }
    return arrbaru
}
var arr = [1, 2, 3]
console.log(unshift(arr, 4));