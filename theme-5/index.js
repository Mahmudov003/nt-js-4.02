// 5. Massivlardan tashkil topgan massiv elementlarini birlashtiruvchi funksiya yozing

function flatten(arr) {
    let str = [];
        arr.forEach(element => {
            str.push(element.join());
        });
        return str;
  }
  const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];