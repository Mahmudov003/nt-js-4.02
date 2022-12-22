// 6. 18-25, 26-35, 36-55 yoshdagi ovoz berganlar va ovoz beruvchilar sonini chiqaruvchi funksiya yozing.
// Chiqishi kerak bo'lgan natija namunasi  pastda ko'rsatilgan

let voterd = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false},
];

function voterResults(arr) {
     return  arr.reduce((acc, cv) => {
    if (cv.age >=18 && cv.age<=25) {
        acc.numYoungPeople++
        if (cv.voted) {
            acc.numYoungVotes++
        }
    } else if (cv.age > 25 && cv.age <=35) {
        acc.numMidsPeople++
        if (cv.voted) {
            acc.numMidVotesPeople++
        }
    } else if (cv.age > 35 && cv.age <=55) {
        acc.numOldsPeople++
        if (cv.voted) {
            acc.numOldVotesPeople++
        }
    }
    return acc
 },{ numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    });
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