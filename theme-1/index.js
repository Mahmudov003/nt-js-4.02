// 1. Massiv elementlari yig'indisini hsioblaydigan funksiya yozing

function total(arr) {
   let sum = 0;
   arr.forEach(elem => {
       sum+= elem;
   })
    return sum;
}
console.log(total([1, 2, 3])); // 6



