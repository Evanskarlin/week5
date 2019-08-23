function initialGroupingDescending(studentsArr) {

    var res = []
    var cek = []
    for (var i = 0; i < studentsArr.length; i++) {
        var temp = []
        if (cek.indexOf(studentsArr[i][0]) == -1) {
            cek.push(studentsArr[i][0])
            temp.push(studentsArr[i][0])
            // console.log(temp);
            for (var j = 0; j < studentsArr.length; j++) {
                // console.log(temp.length);
                if (studentsArr[i][0] === studentsArr[j][0]) {
                    // console.log(studentsArr[i][0]);
                    // console.log(temp[0]);
                    temp.push(studentsArr[j])
                    // console.log(studentsArr[i]);
                }
    
            }
            res.push(temp)
        }
    }
    return res
}

console.log(initialGroupingDescending(['Albert', 'Audric', 'Cindy', 'Claire']))