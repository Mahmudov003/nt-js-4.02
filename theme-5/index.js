// 5. Massivlardan tashkil topgan massiv elementlarini birlashtiruvchi funksiya yozing

function flatten(arr) {
    return `[${arr.join()}]`;
  }
  const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];