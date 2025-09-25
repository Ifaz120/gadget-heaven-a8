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

export { addToTheBuyList, getBuyList}