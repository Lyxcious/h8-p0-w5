/*
  ==================================
  GROUP RACERS COUNTRY
  ==================================

  [INSTRUCTION]
  Terdapat function  groupRacersCountry yang akan menerima 1 parameter berupa array of object dengan isi tiap elemen berupa data kemenangan tiap sirkuit. Function ini akan mengelompokkan input berdasarkan country kelahiran masing -masing racers dengan detail seperti pada contoh dibawah ini.

  [EXAMPLE]
  --- input ---
  [
    {
      circuit: 'Sentul',
      location: 'Indonesia',
      winner: {
        firstName: 'Mario',
        lastName: 'Bross',
        country: 'Italy'
      }
    },
    {
      circuit: 'Malaya',
      location: 'Peru',
      winner: {
        firstName: 'Mark',
        lastName: 'Marques',
        country: 'Spain'
      }
    }
  ]

  --- output --- 
  {
    Italy: {
      winningCircuits: [
        { 
          name: 'Mario Bross',
          winLocation: 'Sentul, Indonesia'
        }
      ],
      totalWin: 1
    },
    Spain: {
      winningCircuits: [
        {
          name: 'Mark Marques',
          winLocation: 'Malaya, Peru'
        }
      ],
      totalWin: 1
    }
  }

  [RULES]
  - dilarang menggunakan for in
  - dilarang menggunakan map, filter, reduce


*/

var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

function groupRacersCountry(arr) {
  var hasil = {}
  for (var i = 0; i < arr.length; i++){
    if (hasil[arr[i].winner.country] === undefined){
      hasil[arr[i].winner.country] = {
        winningCircuits: [],
        totalWin: 0
      }
    }
  }
  for (var i = 0; i < arr.length; i++){
    var nama = arr[i].winner.firstName + " " + arr[i].winner.lastName;
    var lokasi = arr[i].circuit + ", " + arr[i].location
    var temp = {
      name: nama,
      winLocation: lokasi
    }
    for (var j = 0; j < Object.keys(hasil).length; j++){
      if (arr[i].winner.country === Object.keys(hasil)[j]){
        hasil[Object.keys(hasil)[j]].winningCircuits.push(temp);
        hasil[Object.keys(hasil)[j]].totalWin++;
      }

    }
  }
  return JSON.stringify(hasil, null, 2)
}

console.log(groupRacersCountry(motoGP));
/*
{
  Italy: {
    winningCircuits: [
      { name: 'Andrea Dovizioso', winLocation: 'Losail, Qatar' },
      { name: 'Valentino Rossi', winLocation: 'De Jerez, Spain' } ,
      { name: 'Andrea Dovizioso', winLocation: 'Mugello, Italy' }
    ],
    totalWin: 3 
  },
  UK: {
    winningCircuits: [
      { name: 'Cal Crutchlow', winLocation: 'Autodromo, Argentine' }
    ],
    totalWin: 1
  }
}
*/

var motoGP2 = [
  {
    circuit: 'Sentul',
    location: 'Indonesia',
    winner: {
      firstName: 'Mario',
      lastName: 'Bross',
      country: 'Italy'
    }
  },
  {
    circuit: 'Malaya',
    location: 'Peru',
    winner: {
      firstName: 'Mark',
      lastName: 'Marques',
      country: 'Spain'
    }
  }
];

console.log(groupRacersCountry(motoGP2));
/*
{
    Italy: {
      winningCircuits: [
        {
          name: 'Mario Bross',
          winLocation: 'Sentul, Indonesia'
        }
      ],
      totalWin: 1
    },
    Spain: {
      winningCircuits: [
        {
          name: 'Mark Marques',
          winLocation: 'Malaya, Peru'
        }
      ],
      totalWin: 1
    }
  }
*/
