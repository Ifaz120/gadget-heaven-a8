const getBuyList = () => {
  const storedListStr = localStorage.getItem("buy-list");

  // jodi ekhane amader localstorage e kisu thake tahole amra add korbo, nahole empty array return korbo . so ekhane ofcourse checkkora lagbe nahole barbar addkorte thakbe.

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const getWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");

  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  else {
    return [];
  }
};

const addToTheBuyList = (id) => {
  const storedList = getBuyList();
  if (storedList.includes(id)) {
    console.log(id, "its already added");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("buy-list", storedListStr);
  }
};



const addToTheWishList = (id) => {
  const storedList = getWishList();
  if(storedList.includes(id)){
    console.log(id,"its already added");
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
};

const removeFromBuyList = (id) => {
  const cart = getBuyList().filter((items) => items !== id);
  localStorage.setItem("buy-list", JSON.stringify(cart));
};
// ekhane first vul korsilam je getBuyList evabe disi ,() add korinai , so its a major mistake 

// secondly, ami value ta paisi kintu stringify na kore rekhe disi , evabe korle amake real value ta firiye dibenah

const removeFromWishList = (id) => {
  const wish = getWishList().filter((items) => items !== id);
  localStorage.setItem("wish-list", JSON.stringify(wish))
}


export { addToTheBuyList, getBuyList, removeFromBuyList , addToTheWishList , getWishList , removeFromWishList };
