/*
================
Array Mapper
================

[INSTRUCTIONS]

arrayMapper adalah sebuah function yang menerima tiga parameter.
Parameter pertama adalah sebuah array yang bisa terdiri dari tipe data apapun.
Parameter kedua adalah simbol matematika, penambahan, atau simbol pembanding.
Parameter ketiga adalah nilai yang akan menjadi efek operasi atau pembanding.

Untuk setiap nilai array, isi dari masing-masing array akan di operasikan dengan simbol dan effect.

Simbol +, -, *, dan / akan menjalankan proses matematika pada angka.
Simbol === akan membandingkan angka dengan parameter ketiga

Contoh:

targetArr: [1, 2, 3, 4, 5]
operator: +
effect: 5

maka, setiap isi array akan ditambahkan dengan 5, sehingga,
output: [6, 7, 8, 9, 10]

[RULE]
- Wajib menyertakan pseudocode!
- Dilarang menggunakan sintaks .map() !
- Dilarang menggunakan sintaks eval()!
- Dilarang menggunakan rekursif

*/
// PSEUDOCODE:
/*
SWITCH "operator"
  CASE "operator" is "+"
    SET "i" with value 0;
    WHILE "i" less than targetArr.length
      ADD "targetArr[i]" with "effect";
      ADD "i" with 1;
    END WHILE
    BREAK
  CASE "operator" is "-"
    SET "i" with value 0;
    WHILE "i" less than targetArr.length
      MINUS "targetArr[i]" with "effect";
      ADD "i" with 1;
    END WHILE
    BREAK
  CASE "operator" is "*"
    SET "i" with value 0;
    WHILE "i" less than targetArr.length
      MULTIPLY "targetArr[i]" with "effect";
      ADD "i" with 1;
    END WHILE
    BREAK
  CASE "operator" is "/"
    SET "i" with value 0;
    WHILE "i" less than targetArr.length
      DIVIDE "targetArr[i]" with "effect";
      ADD "i" with 1;
    END WHILE
    BREAK
  CASE "operator" is "==="
    SET "i" with value 0;
    WHILE "i" less than targetArr.length
      IF "targetArr[i]" is "effect"
        SET "targetArr[i]" with value true;
      ELSE 
        SET "targetArr[i]" with value false;
      END IF
      ADD "i" with 1;
    END WHILE
    BREAK
END SWITCH
DISPLAY "targetArr"
*/

function arrayMapper(targetArr, operator, effect) {
  switch (operator){
    case "+":
      for (var i = 0; i < targetArr.length; i++){
        targetArr[i] += effect;
      }
      break;
    case "-":
      for (var i = 0; i < targetArr.length; i++){
        targetArr[i] -= effect;
      }
      break;
    case "*":
      for (var i = 0; i < targetArr.length; i++){
        targetArr[i] *= effect;
      }
      break;
    case "/":
      for (var i = 0; i < targetArr.length; i++){
        targetArr[i] /= effect;
      }
      break;
    case "===":
      for (var i = 0; i < targetArr.length; i++){
        if (targetArr[i] === effect){
          targetArr[i] = true;
        } else {
          targetArr[i] = false;
        }
      }
      break;
  }
  return targetArr
}

console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]
console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper([1, 3, 3], '===', 3)); // [false, true, true]
