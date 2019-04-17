function ganjil(arr){
    if (arr.length === 0){
        return [];
    }
    if (arr[0] % 2 === 1){
        return [arr[0]].concat(ganjil(arr.slice(1)))
    }
    return ganjil(arr.slice(1))
}

console.log(ganjil([2, 5, 7, 4, 3]))