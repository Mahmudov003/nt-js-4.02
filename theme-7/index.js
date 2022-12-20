// 7. Musbat elementlar yig'indisini toping;

function sumPositive(arr) {
    let sun = 0;
    arr.forEach((elem) => {
      if (elem > 0) {
        return (sun += elem);
      }
    });
    return sun;
  }
  
  console.log(sumPositive([1, -4, 12, 0, -3, 29, -150])) // 42
  