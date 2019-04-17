function kaliTerusRekursif(angka) {
    if (String(angka).length === 1){
        return angka
    } else {
        angka = String(angka).split("");
        var totalKali = 1;
        for (var i = 0; i < angka.length; i++){
            totalKali *= Number(angka[i]);
        }
    }
    return kaliTerusRekursif(totalKali)
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6