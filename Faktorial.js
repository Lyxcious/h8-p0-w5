function faktorial(angka){
    if (angka === 1){
        return 1
    } else {
        return angka * faktorial(angka-1);
    }
}

console.log(faktorial(6))