function changeVocals (str) {
    var hurufA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hurufB = "abcdefghijklmnopqrstuvwxyz";
    var strBaru = str.split("");
    for (var i = 0; i < str.length; i++){
      if (str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o"){
        for (var j = 0; j < hurufB.length; j++){
          if (str[i] === hurufB[j]){
            strBaru[i] = hurufB[j+1];
          } else if (str[i] === hurufB[hurufB.length-1]){
            strBaru[i] = hurufB[0];
          }
        }
      }
      if (str[i] === "A" || str[i] === "I" || str[i] === "U" || str[i] === "E" || str[i] === "O"){
        for (var j = 0; j < hurufA.length; j++){
          if (str[i] === hurufA[j]){
            strBaru[i] = hurufA[j+1];
          } else if (str[i] === hurufA[hurufA.length-1]){
            strBaru[i] = hurufA[0];
          }
        }
      }
    }
 return strBaru;
}
  
function reverseWord (str) {
  strReverse = [];
  for (var i = changeVocals(str).length-1; i >= 0 ; i--){
    strReverse.push(changeVocals(str)[i]);
  }
  return strReverse;
}
  
function setLowerUpperCase (str) {
  strLowerUpper = [];
  for (var j = 0; j < reverseWord(str).length; j++){
    if (reverseWord(str)[j] === reverseWord(str)[j].toLowerCase()){
      strLowerUpper.push(reverseWord(str)[j].toUpperCase())
    } else if (reverseWord(str)[j] === reverseWord(str)[j].toUpperCase()){
      strLowerUpper.push(reverseWord(str)[j].toLowerCase())
    }
  }
  return strLowerUpper
}
  
function removeSpaces (str) {
  strNoSpace = [];
  for (var k = 0; k < setLowerUpperCase(str).length; k++){
    if (setLowerUpperCase(str)[k] !== " "){
      strNoSpace.push(setLowerUpperCase(str)[k]);
    }
  }
  return strNoSpace;
}
  
function passwordGenerator (name) {
  if (name.length < 5){
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  var pass = removeSpaces(name).join("");
  return pass;
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

