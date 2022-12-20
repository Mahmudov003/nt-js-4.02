// 1. Massiv elementlari yig'indisini hsioblaydigan funksiya yozing

// function total(arr) {
//    let sum = 0;
//    arr.forEach(elem => {
//        sum+= elem;
//    })
//     return sum;
// }
// console.log(total([1, 2, 3])); // 6


// 2. Massiv elementlarini birlashtiradigan (concatanate)funksiya yozing

function stringConcat(arr) {
    return arr.join('')
}

// console.log(stringConcat([1, 2, 3])); // "123"


// 3. Nechta odam ovoz berganini hisoblovchi funksiya yozing. voted: true bo'lsa, ovoz bergan bo'ladi

function totalVotes(arr) {
    let sum = 0;
    arr.forEach(elem => {
        if (elem.voted == true) {
            sum++;
        }
    })
    return sum;
}

let voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters)); // 7


// 4. Agar har bir elementdan 1 tadan sotib olinsa, jami qancha bo'ladi

function shoppingSpree(arr) {
    let price = 0;
    arr.forEach( item => {
        price += item.price;
    })
    return price;
}

const wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "A second Tesla Model S", price: 90000}
];

// console.log(shoppingSpree(wishlist)); // 227005


// 5. Massivlardan tashkil topgan massiv elementlarini birlashtiruvchi funksiya yozing

function flatten(arr) {
    return `[${arr.join()}]`
}
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];




// 6. 18-25, 26-35, 36-55 yoshdagi ovoz berganlar va ovoz beruvchilar sonini chiqaruvchi funksiya yozing.
// Chiqishi kerak bo'lgan natija namunasi  pastda ko'rsatilgan

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    // your code here
}

console.log(voterResults(voters)); // Returned value shown below:



/*
{ numYoungVotes: 1,
 numYoungPeople: 4,
 numMidVotesPeople: 3,
 numMidsPeople: 4,
 numOldVotesPeople: 3,
 numOldsPeople: 4
}
*/

// 7. Musbat elementlar yig'indisini toping;

function sumPositive(arr) {
    let sun = 0;
    arr.forEach(elem => {
        if (elem > 0) {
            return sun += elem;
        }
    });
    return sun;
}

// console.log(sumPositive([1, -4, 12, 0, -3, 29, -150])) // 42