/**
=======================
British National Crisis
=======================
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris
dengan melakukan pengeboman di tempat-tempat yang berbeda.
Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh
ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan
angka 2,3,4,6,7, atau 8
 yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan
beberapa kata berupa angka dalam bahasa Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8
Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi:
TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!
Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi:
SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!
Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi:
FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!
Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi:
TWO => 2. Maka targetnya District 2!
HINT:
Urutan angka mana yang keluar lebih dulu tidak penting!
Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea(code) {
  var num2 = code.match(/[TWO]/g)
  var countTWO = [0, 0, 0]
  if (num2 !== null){
    for (var i = 0; i < num2.length; i++){
      if (num2[i] === "T"){
        countTWO[0]++ 
      } else if (num2[i] === "W"){
        countTWO[1]++ 
      } else if (num2[i] === "O"){
        countTWO[2]++ 
      }
    }
  }
  countTWO = Math.min.apply(Math, countTWO)
  if (countTWO > 0){
    code = code.split("")
    totalTWO = [countTWO, countTWO, countTWO]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "T" && totalTWO[0] > 0){
        code[i] = ""
        totalTWO[0]--
      } else if (code[i] === "W" && totalTWO[1] > 0){
        code[i] = ""
        totalTWO[1]--
      } else if (code[i] === "O" && totalTWO[2] > 0){
        code[i] = ""
        totalTWO[2]--
      }
    }
    code = code.join("")
  }
  countTWO = countTWO * 2

 var num3 = code.match(/[THREE]/g)
 var countTHREE = [0, 0, 0, 0]
 if (num3 != null){
   for (var i = 0; i < num3.length; i++){
    if (num3[i] === "T"){
       countTHREE[0] ++ 
    } else if (num3[i] === "H"){
      countTHREE[1] ++ 
    } else if (num3[i] === "R"){
      countTHREE[2] ++ 
    } else if (num3[i] === "E"){
      countTHREE[3] ++ 
    }
   }
   countTHREE[3]= countTHREE[3]/2;
  }
  countTHREE = Math.min.apply(Math, countTHREE)
  if (countTHREE > 0){
    code = code.split("")
    totalTHREE = [countTHREE, countTHREE, countTHREE, (countTHREE * 2)]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "T" && totalTHREE[0] > 0){
        code[i] = ""
        totalTHREE[0]--
      } else if (code[i] === "H" && totalTHREE[1] > 0){
        code[i] = ""
        totalTHREE[1]--
      } else if (code[i] === "R" && totalTHREE[2] > 0){
        code[i] = ""
        totalTHREE[2]--
      } else if (code[i] === "E" && totalTHREE[3] > 0){
        code[i] = ""
        totalTHREE[3]--
      }
    }
    code = code.join("")
  }
  countTHREE = countTHREE * 3
  
  var num4 = code.match(/[FOUR]/g)
  var countFOUR = [0, 0, 0, 0]
  if(num4 != null){
    for (var i = 0; i < num4.length; i++){
      if (num4[i] === "F"){
        countFOUR[0] ++ 
      } else if (num4[i] === "O"){
        countFOUR[1] ++ 
      } else if (num4[i] === "U"){
        countFOUR[2] ++ 
      } else if (num4[i] === "R"){
        countFOUR[3] ++ 
      }
    }
  }
  countFOUR = Math.min.apply(Math, countFOUR) 
  if (countFOUR > 0){
    code = code.split("")
    totalFOUR = [countFOUR, countFOUR, countFOUR, countFOUR]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "F" && totalFOUR[0] > 0){
        code[i] = ""
        totalFOUR[0]--
      } else if (code[i] === "O" && totalFOUR[1] > 0){
        code[i] = ""
        totalFOUR[1]--
      } else if (code[i] === "U" && totalFOUR[2] > 0){
        code[i] = ""
        totalFOUR[2]--
      } else if (code[i] === "R" && totalFOUR[3] > 0){
        code[i] = ""
        totalFOUR[3]--
      }
    }
    code = code.join("")
  }
  countFOUR = countFOUR * 4

 var num5 = code.match(/[FIVE]/g)
 var countFIVE = [0, 0, 0, 0]
 if (num5 != null){
   for (var i = 0; i < num5.length; i++){
    if (num5[i] === "F"){
       countFIVE[0] ++ 
    } else if (num5[i] === "I"){
      countFIVE[1] ++ 
    } else if (num5[i] === "V"){
      countFIVE[2] ++ 
    } else if (num5[i] === "E"){
      countFIVE[3] ++ 
    }
   }
 }
 countFIVE = Math.min.apply(Math, countFIVE) 
  if (countFIVE > 0){
    code = code.split("")
    totalFIVE = [countFIVE, countFIVE, countFIVE, countFIVE]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "F" && totalFIVE[0] > 0){
        code[i] = ""
        totalFIVE[0]--
      } else if (code[i] === "I" && totalFIVE[1] > 0){
        code[i] = ""
        totalFIVE[1]--
      } else if (code[i] === "V" && totalFIVE[2] > 0){
        code[i] = ""
        totalFIVE[2]--
      } else if (code[i] === "E" && totalFIVE[3] > 0){
        code[i] = ""
        totalFIVE[3]--
      }
    }
    code = code.join("")
  }
  countFIVE = countFIVE * 5

 var num6 = code.match(/[SIX]/g)
 var countSIX = [0, 0, 0]
 if (num6 != null){
   for (var i = 0; i < num6.length; i++){
    if (num6[i] === "S"){
       countSIX[0] ++ 
    } else if (num6[i] === "I"){
      countSIX[1] ++ 
    } else if (num6[i] === "X"){
      countSIX[2] ++ 
    }
   }
 }
 countSIX = Math.min.apply(Math, countSIX) 
  if (countSIX > 0){
    code = code.split("")
    totalSIX = [countSIX, countSIX, countSIX]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "S" && totalSIX[0] > 0){
        code[i] = ""
        totalSIX[0]--
      } else if (code[i] === "I" && totalSIX[1] > 0){
        code[i] = ""
        totalSIX[1]--
      } else if (code[i] === "X" && totalSIX[2] > 0){
        code[i] = ""
        totalSIX[2]--
      }
    }
    code = code.join("")
  }
  countSIX = countSIX * 6

 var num7 = code.match(/[SEVEN]/g)
 var countSEVEN = [0, 0, 0, 0]
 if (num7 != null){
   for (var i = 0; i < num7.length; i++){
    if (num7[i] === "S"){
       countSEVEN[0] ++ 
    } else if (num7[i] === "E"){
      countSEVEN[1] ++ 
    } else if (num7[i] === "V"){
      countSEVEN[2] ++ 
    } else if (num7[i] === "N"){
      countSEVEN[3] ++ 
    }
   }
   countSEVEN[1] = countSEVEN[1]/2
 }
 countSEVEN = Math.min.apply(Math, countSEVEN) 
  if (countSEVEN > 0){
    code = code.split("")
    totalSEVEN = [countSEVEN, (countSEVEN * 2), countSEVEN, countSEVEN]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "S" && totalSEVEN[0] > 0){
        code[i] = ""
        totalSEVEN[0]--
      } else if (code[i] === "E" && totalSEVEN[1] > 0){
        code[i] = ""
        totalSEVEN[1]--
      } else if (code[i] === "V" && totalSEVEN[2] > 0){
        code[i] = ""
        totalSEVEN[2]--
      } else if (code[i] === "N" && totalSEVEN[3] > 0){
        code[i] = ""
        totalSEVEN[3]--
      }
    }
    code = code.join("")
  }
  countSEVEN = countSEVEN * 7

 var num8 = code.match(/[EIGHT]/g)
 var countEIGHT = [0, 0, 0, 0, 0]
 if (num8 != null){
   for (var i = 0; i < num8.length; i++){
    if (num8[i] === "E"){
       countEIGHT[0] ++ 
    } else if (num8[i] === "I"){
      countEIGHT[1] ++ 
    } else if (num8[i] === "G"){
      countEIGHT[2] ++ 
    } else if (num8[i] === "H"){
      countEIGHT[3] ++ 
    } else if (num8[i] === "T"){
      countEIGHT[4] ++ 
    }
   }
 }
 countEIGHT = Math.min.apply(Math, countEIGHT) 
  if (countEIGHT > 0){
    code = code.split("")
    totalEIGHT = [countEIGHT, countEIGHT, countEIGHT, countEIGHT, countEIGHT]
    for (var i = 0; i < code.length; i++){
      if (code[i] === "E" && totalEIGHT[0] > 0){
        code[i] = ""
        totalEIGHT[0]--
      } else if (code[i] === "I" && totalEIGHT[1] > 0){
        code[i] = ""
        totalEIGHT[1]--
      } else if (code[i] === "G" && totalEIGHT[2] > 0){
        code[i] = ""
        totalEIGHT[2]--
      } else if (code[i] === "H" && totalEIGHT[3] > 0){
        code[i] = ""
        totalEIGHT[3]--
      } else if (code[i] === "T" && totalEIGHT[4] > 0){
        code[i] = ""
        totalEIGHT[4]--
      }
    }
    code = code.join("")
  }
  countEIGHT = countEIGHT * 8

 var count = countTWO + countTHREE + countFOUR + countFIVE + countSIX + countSEVEN + countEIGHT
 return "District " + count +" is the next target!"
}
  
  console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
  console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
  console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
  console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
  console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"