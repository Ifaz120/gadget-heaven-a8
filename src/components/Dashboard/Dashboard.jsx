import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBuyList } from "../../utility/AddToDb";
import ProductDetails from "../ProductDetails/ProductDetails";
import Product from "../Product/Product"
import CartList from "../CartList/CartList";
const Dashboard = () => {
  const [buyList, setBuyList] = useState([]);

  const allProduct = useLoaderData();
  useEffect(() => {
    const storedBuyList = getBuyList();
    const storedBuyListInt = storedBuyList.map((id) => parseInt(id));

    const buyProductList = allProduct.filter((prod) =>
      storedBuyListInt.includes(prod.product_id)
    );
    setBuyList(buyProductList);
  }, []);

  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div className="">
      <div className="bg-[#9538E2] text-center text-white pt-10 pb-10 flex flex-col gap-y-5">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center gap-x-5">
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn font-bold text-base py-2 px-12 rounded-2xl
             ${
               activeTab === "cart"
                 ? "bg-white text-[#9538E2] border-none"
                 : "bg-[#9538E2] text-white border-1 border-white "
             }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`btn font-bold text-base py-2 px-12 rounded-2xl
             ${
               activeTab === "wishlist"
                 ? "bg-white text-[#9538E2] border-none"
                 : "bg-[#9538E2] text-white border-1 border-white "
             }`}
          >
            WishList
          </button>
        </div>
      </div>
      <div className="text-black w-[90%] mx-auto">
        <div>

          <div>
            {activeTab === "cart" ? <h2>Cart</h2> : <h2> Wish list</h2>}
          </div>
          <div>
            {/* ekhane price and etc boshbe */}
          </div>

        </div>
        {/* ekhane tab change er jinish gula thakbe */}
        <div>
          {/* ekhane props jinish disi karon amar product er vetore item gula ovabei dewa */}
           {
          activeTab === "cart" ? 
            buyList.map((prods)=><CartList key={prods.product_id} jinish={prods}></CartList>)
           : "" 
        }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
