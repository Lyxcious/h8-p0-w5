/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)
  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}
  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!
  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate
  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(
  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2
  Selamat berjuang, agen rahasia..
  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !
*/

/* PSEUDOCODE
SET "input" with input.split("")
SET "huruf" with "abcdefghijklmnopqrstuvwxyz"
SET "kode" with "!@#$%^&*()-+1234567890[]{}"
SET "i" with 0
WHILE "i" less than input.length
  SET "j" with 0
  WHILE "j" less than huruf.length
    IF "input[i]" same as "huruf[j]"
      SET "input[i]" with "kode[j]"
    END IF
    ADD "j" with 1
  END WHILE
  ADD "i" with 1
END WHILE
DISPLAY "input.join("")"
*/

function encrypt(input) {
  input = input.split("")
  var huruf = "abcdefghijklmnopqrstuvwxyz";
  var kode = "!@#$%^&*()-+1234567890[]{}"
  for (var i = 0; i < input.length; i++){
    for (var j = 0; j < huruf.length; j++){
      if(input[i] === huruf[j]){
        input[i] = kode[j]
      }
    }
  }
  return input.join("")
}


console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2