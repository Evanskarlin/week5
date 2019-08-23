/*
=================================
Recursive Mastery : Data Reducer
=================================
Nama:____
[INSTRUKSI]
Diberikan sebuah function dataReducer yang menerima satu parameter berupa string.
Function akan memproses string dengan mengecek secara alphabet urutan yang dimulai dari karakter pertama.
Apabila ditemukan karakter yang bukan merupakan alphabet setelahnya, karakter tersebut di skip.
Function akan mereturn karakter apa saja yang di-skip, dalam bentuk string dibatasi dengan koma.
[CONTOH]
input: abcdxefgh5wi menjadi abcdefghi,
proses: kita meng-skip x karena setelah d harusnya e, dan 5 dan w karena setelah h harusnya i.
output: 'x,5,w'
input: opqrstu menjadi opqrstu,
proses: tidak ada yang terskip
output: ''
input: acdefghij => a
proses: kita meng-skip c,d,e,f,g,h,i,j karena setelah a seharusnya b
output: c,d,e,f,g,h,i,j
*/

function reducer (str){
    var kamus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if(str.length == 1){
        return ''
    }
    else{
        if(kamus.indexOf(str[0])+1 == kamus.indexOf(str[1])){
            return reducer(str.slice(1))
        }
        else{
            return str[1] + "," + reducer(str[0] + str.slice(2))
        }
    }
}

console.log(reducer('abcdxefgh5wi')); //'x,5,w'
console.log(reducer('opqrstu')); //''
console.log(reducer('acdefghij')); //'c,d,e,f,g,h,i,j'