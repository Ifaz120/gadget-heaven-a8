import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState("all");
  const [allData, setAllData] = useState([]);

  // this is how you access the sort system, kinda need to note it down...
  useEffect(() => {
    fetch("/gadgetData.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setAllData(data);
      });
  }, []);

  const filterResult = (catType) => {
    if(catType === "") {
      setCards(allData);
    }
    else{
      const result = allData.filter((curData) => {
        return curData.category === catType;
      });
      setCards(result);
    }
  };

  return (
    <div className="text-black mt-20 w-[90%] mx-auto text-center ">
      <div>
        <h2 className="font-bold text-4xl">Explore Cutting-Edge Gadgets</h2>
      </div>
      <div className="flex gap-x-10">
        <div className="flex flex-col p-4  bg-white h-[350px] gap-4 w-[10%]">
          <button
            onClick={() => {
              setActive("all");
              filterResult("");
            }}
            className={` btn border-none  rounded-2xl
          ${
            active === "all"
              ? "bg-[#9538E2] text-white"
              : " bg-[#d5d4d4] text-gray-700"
          } `}
          >
            All
          </button>

          <button
            onClick={() => {
              setActive("laptops");
              filterResult("laptop");
            }}
            className={` btn border-none  rounded-2xl
          ${
            active === "laptops"
              ? "bg-[#9538E2] text-white"
              : " bg-[#d5d4d4] text-gray-700"
          } `}
          >
            Laptops
          </button>

          <button
            onClick={() => {setActive("phones");
              filterResult("phone");
            }}
            className={` btn border-none  rounded-2xl
          ${
            active === "phones"
              ? "bg-[#9538E2] text-white"
              : " bg-[#d5d4d4] text-gray-700"
          } `}
          >
            Phones
          </button>

          <button
            onClick={() => {setActive("accessories");
              filterResult("accessories");
            }}
            className={` btn border-none  rounded-2xl
          ${
            active === "accessories"
              ? "bg-[#9538E2] text-white"
              : " bg-[#d5d4d4] text-gray-700"
          } `}
          >
            Accessories
          </button>

          <button
            onClick={() => {setActive("watch");
              filterResult("smartwatch");
            }}
            className={` btn border-none  rounded-2xl
          ${
            active === "watch"
              ? "bg-[#9538E2] text-white"
              : " bg-[#d5d4d4] text-gray-700"
          } `}
          >
            Smartwatch
          </button>
        </div>
        <div className="grid grid-cols-3 gap-x-10">
          {cards.map((jinish) => (
            <Product key={jinish.product_id} jinish={jinish}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
