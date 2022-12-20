
// 6. 18-25, 26-35, 36-55 yoshdagi ovoz berganlar va ovoz beruvchilar sonini chiqaruvchi funksiya yozing.
// Chiqishi kerak bo'lgan natija namunasi  pastda ko'rsatilgan

let voterd = [1 ,1
    //   { name: "Bob", age: 30, voted: true },
    //   { name: "Jake", age: 32, voted: true },
    //   { name: "Kate", age: 25, voted: false },
    //   { name: "Sam", age: 20, voted: false },
    //   { name: "Phil", age: 21, voted: true },
    //   { name: "Ed", age: 55, voted: true },
    //   { name: "Tami", age: 54, voted: true },
    //   { name: "Mary", age: 31, voted: false },
    //   { name: "Becky", age: 43, voted: false },
    //   { name: "Joey", age: 41, voted: true },
    //   { name: "Jeff", age: 30, voted: true },
    //   { name: "Zack", age: 19, voted: false },
    ];
    
    function voterResults(arr) {
      const yosh = arr.reduce((acc, cv) => {
        acc += cv.age;
      }, 0);
      return yosh;
    }
    
    console.log(voterResults(voterd)); // Returned value shown below:
    
    /*
    { numYoungVotes: 1,
     numYoungPeople: 4,
     numMidVotesPeople: 3,
     numMidsPeople: 4,
     numOldVotesPeople: 3,
     numOldsPeople: 4
    }
    */