function totalDigitRekursif(angka) {
    var count = 0;
    if (angka === 0){
        return count
    } else {
        angka = String(angka).split("");
        count = Number(angka[0]);
        angka = Number(angka.slice(1,angka.length).join(""))
    }
    return count + totalDigitRekursif(angka)
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5