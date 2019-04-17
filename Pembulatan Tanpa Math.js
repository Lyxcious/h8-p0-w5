function floor(abc){
    var sisa = abc % 1;
    return abc - sisa
}

function ceil(abc){
    var sisa = abc % 1;
    if (sisa > 0){
        return abc + 1 - sisa
    } else {
        return abc
    }
}

console.log(floor(2.8))

console.log(ceil(2.5))