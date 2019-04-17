function sorting(arrNumber) {
    var sortir = arrNumber;
    var tmp = [];
    for (i = 0; i < sortir.length; i++) { 
	    for (j = 0; j < sortir.length; j++) { 
		    if (sortir[j] > sortir[j+1]) {
		        tmp = sortir[j];
		        sortir[j] = sortir[j + 1];
		        sortir[j + 1] = tmp;
		    }
	    }
    }
    return sortir;
}
  
function getTotal(arrNumber) {
    var count = 0;
    for (var i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] > arrNumber[i-1] || i === 0){
            count = 1;
        } else if (arrNumber[i] === arrNumber[i-1]){
            count++;
        }
    }
    if (count === 0){
        return "";
    } else {
        return "angka paling besar adalah " + arrNumber[arrNumber.length-1] + " dan jumlah kemunculan sebanyak " + count + " kali";
    }
}
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
    // return listSort
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''