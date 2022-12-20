// 4. Agar har bir elementdan 1 tadan sotib olinsa, jami qancha bo'ladi

function shoppingSpree(arr) {
    let price = 0;
    arr.forEach((item) => {
      price += item.price;
    });
    return price;
  }
  
  const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
  ];
  
  console.log(shoppingSpree(wishlist)); // 227005