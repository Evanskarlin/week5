function changeVocals (str) {
    //code di sini
    var arr = str.split('')
    for(var i=0 ; i<arr.length ; i++){
        if (arr[i] == 'a'){
            arr[i] = 'b'
        }
        else if (arr[i] == 'i'){
            arr[i] = 'j'
        }
        else if (arr[i] == 'u'){
            arr[i] = 'v'
        }
        else if (arr[i] == 'e'){
            arr[i] = 'f'
        }
        else if (arr[i] == 'o'){
            arr[i] = 'p'
        }
        else if (arr[i] == 'A'){
            arr[i] = 'B'
        }
        else if (arr[i] == 'I'){
            arr[i] = 'J'
        }
        else if (arr[i] == 'U'){
            arr[i] = 'V'
        }
        else if (arr[i] == 'E'){
            arr[i] = 'F'
        }
        else if (arr[i] == 'O'){
            arr[i] = 'P'
        }
    }
    return arr.join('')
  }
  
  function reverseWord (str) {
    //code di sini
    var balik = ''
    for(var i = str.length-1 ; i>=0 ; i--){
        balik += str[i]
    }
    return balik
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var arr = str.split('')
    for(var i = 0 ; i<arr.length ; i++){
        if(arr[i] == arr[i].toLowerCase()){
            arr[i] = arr[i].toUpperCase()
        }
        else{
            arr[i] = arr[i].toLowerCase()
        }
    }
    return arr.join('')
  }
  
  function removeSpaces (str) {
    //code di sini
    var arr = str.split('')
    for(var i = arr.length-1 ; i>=0 ; i--){
        if (arr[i] == " "){
            arr.splice(i,1)
        }
    }
    return arr.join('')
  }
  
  function passwordGenerator (name) {
    if (name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    else{
        var ganti = changeVocals(name)
        var reverse = reverseWord(ganti)
        var set = setLowerUpperCase(reverse)
        var space = removeSpaces(set)
        return space
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'